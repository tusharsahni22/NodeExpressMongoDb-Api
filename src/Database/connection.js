const mongoose =require("mongoose")
const DB ="mongodb+srv://admin:admin@nextproject.4xxcxdp.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(DB).then(()=>{
    (console.log("Connected to Database"))
}).catch((err)=>{
     console.log(err)
})
