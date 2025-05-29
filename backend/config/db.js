import mongoose from "mongoose";

export const connectDB = async () => {

    await mongoose.connect('mongodb+srv://bikramkumarchoudhary585:Bikram2005@cluster0.3y0adah.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log("DB Connected"));

}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.