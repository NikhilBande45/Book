import mongoose from 'mongoose'

const connectToMongoDB = (URI) =>{
    try{
        mongoose.connect(URI);
        console.log("connection successful");
    }catch(error){
        console.log(error);
    }
    
}

export default connectToMongoDB;
