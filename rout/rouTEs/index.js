const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();





router.get("/", (req, res, next) => {
    res.send('Goodbye, Mars!')
})


router.post(
    "/",
    bodyParser.urlencoded({
         extended: true
         }),
         (req, res, next) => {
             res.send(req.body)
         }
)



module.exports = router