import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) =>{
    console.log('Body payload:', req.body);
    const { userName, emailID, password } = req.body;
    if (!password) {
        return res
        .status(400)
        .json({ success: false, message: 'Password is required' });
    }
    const hashedPass = bcryptjs.hashSync(password, 10);
    const newUser = new User({userName, emailID, password: hashedPass});
    try{
        await newUser.save();
        res.status(201).json("newUser Registered Succesfully");
    } catch (error){
        next(error);
    }
    
};


export const signin = async (req, res, next) => {
    const {emailID, password} = req.body;
    try{
        const validUser = await User.findOne({emailID});
        if(!validUser) return next(errorHandler(404, "User Not Found"));
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, "Invalid Credentials"));
        const token = jwt.sign({id: validUser._id}, process.env.SECRET_KEY);
        const {password: pass, ...rest} = validUser._doc;
        res.cookie('access_token', token, {httpOnly : true}).status(200).json(rest);
    } catch(error){
        next(error);
    }
};