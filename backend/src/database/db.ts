import mongoose from "mongoose";

const connection=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/sunrise").then(()=>console.log("DB Connected"))
}
export default connection;