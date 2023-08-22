import mongoose from "mongoose";

export const connectDB = ()=>{

    mongoose.connect('mongodb://127.0.0.1:27017/backendapi')
        .then(() => console.log("database is connected"))
        .catch((e) => console.log(e));
}
