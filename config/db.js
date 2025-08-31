import mongoose from "mongoose";

let cahced = global.mongoose
if (!cahced) {
    cahced = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
    if (cahced.conn) {
        return cahced.conn;
    }
    if (!cahced.promise) {
        const opts = {
            bufferCommands: false,
        }
        catched.promise = mongoose.connect(`${process.env.MONGODB_URI}/quickcart`, opts).then((mongoose) => {
            return mongoose;
        })
    }

    cahced.conn = await cahced.promise;
    return cahced.conn;
}

export default connectDB;