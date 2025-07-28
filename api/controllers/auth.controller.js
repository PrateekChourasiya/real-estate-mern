import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

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