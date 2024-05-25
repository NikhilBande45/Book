import User from '../model/user_model.js'
import bcrypt from 'bcrypt'
export const signUpUser = async(req , res) =>{

    try{
        const { fullname , email , password }= req.body;

        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({message : "user already exist"})
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const createdUser = new User({
            fullname,
            email,
            password : hashPassword
        });

        await createdUser.save();

        res.status(201).json({ message: 'user created successfully' , createdUser})
        
    } catch(error){
        console.log("Error:" , error.message);
        res.status(501).json( {message : 'Interval server error'})
    }

}

export const loginUser = async(req , res) =>{
    try{
        const {email , password} = req.body;

        const user = await User.findOne({email})
        
        if(!user){
            return res.status(400).json({message : 'Invalid Credentials'})
        }
        const checkPassword = await bcrypt.compare(password , user.password);
        // console.log('checkpassword' , checkPassword , user.password);

        if(!user || !checkPassword){
            return res.status(400).json({message : 'Invalid Credentials'})
        }

        return res.status(200).json({message : "login successful" , user})

    }catch(error){
        console.log("Error :" , error)
        res.status(501).json( {message : 'Interval server error'})
    }
}