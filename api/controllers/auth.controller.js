import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) =>{
    const {userName, emailID, password} = req.body;
    const hashedPass = bcryptjs.hashSync(password, 10);
    const newUser = new User({userName, emailID, password: hashedPass});
    try{
        await newUser.save();
        res.status(201).send("newUser Registered Succesfully");
    } catch (error){
        res.status(500).send(`${error} that is Duplicate Credentials`);
    }
    
};