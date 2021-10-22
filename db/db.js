const mongoose=require('mongoose');

var url="mongodb+srv://user01:PropheC69@cluster0.0rpgb.mongodb.net/portfolioEldo?retryWrites=true&w=majority";
var conn=mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

console.log("Connected to MongoDB");

module.exports=conn;