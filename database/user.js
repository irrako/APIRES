const mongoose=require('./connect');
const user={
    url:String,
    name:String
}
const usermodel=mongoose.model('User',user);
module.exports=usermodel;
