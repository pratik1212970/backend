const mongoose=require('mongoose');
// const mongoUrl = 'mongodb://localhost:27017/online-course';
const mongoUrl = 'mongodb+srv://pratikjadhav1612:1jNBVQTuoRCcrVxG@cluster0.etpfc.mongodb.net/'

mongoose.connect(mongoUrl,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("connected to mongodb server")
})

db.on('error', (err)=>{
    console.log("error while connecting", err)
})