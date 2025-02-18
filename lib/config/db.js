import mongoose from "mongoose";

export const ConnectDB = async ()=>{
    await mongoose.connect('mongodb+srv://salimMattoussi:salim1312@mattoussisalim.bblwu.mongodb.net/SlowB');
    console.log('BD conected');
    
}