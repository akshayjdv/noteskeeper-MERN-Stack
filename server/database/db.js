import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });
    console.log("database connected successfully");
  } catch (e) {
    console.log(`caught some erros ${e}`);
  }
};

export default Connection;