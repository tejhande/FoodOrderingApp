import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://windspeed:windspeed8788015377@cluster0.wv3tq.mongodb.net/FOODORDERINGAPP').then(()=> console.log("DB Connected"))
}

