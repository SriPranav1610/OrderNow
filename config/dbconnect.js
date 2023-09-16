const mongoose = require("mongoose");
require("dotenv").config();

const MONGOURI = "mongodb+srv://Foodordering:order123@cluster0.j8wyj3d.mongodb.net/?retryWrites=true&w=majority";

const ConnectDB = () => {
    mongoose.set('strictQuery', true);

    mongoose.connect(MONGOURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.Promise = global.Promise;

    mongoose.connection.on("connected", async () => {
        console.log("connected to mongo ");
    });

    mongoose.connection.on("error", async (err) => {
        console.log("error connecting", err);
    });
}

module.exports = ConnectDB;

