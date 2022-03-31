require("dotenv").config();
const express = require("express");
const app = express();


app.use("/",require("./routes/index"));

//disini routing
app.listen(process.env.PORT, () =>{
    console.log(`Server berjalan di port ${process.env.PORT}`);
});
