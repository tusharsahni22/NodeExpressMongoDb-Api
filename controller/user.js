const UserModel = require("../src/Database/model");



const  addUser = async (req,res)=>{
    const data =new UserModel(req.body)
    data.save() 
    res.send(data)
};


const  getUserByParams = async (req,res)=>{
    const id =(req.params.id)
    const requestedData = await UserModel.findById(id)    
    res.send(requestedData)
};

const  getUser = async (req,res)=>{
    const {name ,address,gender,age, phone,sort} =req.query;
    const _id =req.params.id
    const quriedData ={}

    if(name){
        quriedData.name ={$regex: name,$options:"i"}
    }
    if(address){
        quriedData.address ={$regex: address,$options:"i"}
    }
    if(gender){
        quriedData.gender ={$regex: gender,$options:"i"}
    }
    if(age){
        quriedData.age =age
    }
    if(phone){
        quriedData.phone =phone
    }

    let apiData=  UserModel.find(quriedData)
    if(sort){
       const sortfix = sort.split(",").toString().replace(","," ")
        apiData=apiData.sort(sortfix)
    }

        const requestedData = await apiData  
        res.send(requestedData)
    

}

module.exports = {addUser,getUser,getUserByParams};