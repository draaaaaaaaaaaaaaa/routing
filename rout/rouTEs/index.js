const users =[
    {
        id : 1, 
        nama : "da",
        kelas : "Rpla"
    },
    {
        id: 2,
        nama: "dz",
        kelas : "RPB"
    },
    {
        id:3,
        nama:"dm",
        kelas : "Rpc"
    }

]

const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();





router.get("/", (req, res, next) => {
    res.send('Goodbye, Mars!')
})

//method post
router.post(
    "/",
    bodyParser.urlencoded({
         extended: true
         }),
         (req, res, next) => {
             res.send(req.body)
         }
)

//method delete
router.delete("/id", (req,res,send)=>{
    res.send(`data dengan ${req.params.id} dihapus`)
})

router.delete("/", (req,res,next)=>{
    res.send(`Tidak dapat menghapus , karena anda belum menambahkan ID`)
})

router.get("/user",(req,res,next)=>{
    res.send({users})
})

router.get('/user/:id', (req, res, next) => {
    // hello user
    const user = users.find(({id}) => id === parseInt(req.params.id))
    if (!user) {
        res.status(404).send('user not found')
    }
    res.send(user)
})
        


module.exports = router