const mongoose = require('mongoose');
const env = require('./env');

mongoose.set("strictQuery", true);

async function connectDB() {
    try {
        const conn = await mongoose.connect(env.mongoUri, {
            serverSelectionTimeoutMS: 10_000,
        });

        console.log(
            `MongoDB Connected: ${conn.connection.host}/${conn.connection.name}`
        );
    } catch (err) {
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
}

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err.message);
});

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

module.exports = {connectDB};