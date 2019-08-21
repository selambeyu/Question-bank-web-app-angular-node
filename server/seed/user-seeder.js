var User=require('../models/user');
var mogoose=require('mogoose');
mongoose.connect('mongodb://localhost/full-end-to-end-app')
var users=new User[({
    username:"melkam",
    password:fkdlfk586987
}),
new User({
    username:"mbeimner",
    password:uwt8fk
})
,new User({
    username:"hidwpt",
    password:fdflkakd
})];
var done=0;

for(var i=0;i<products.length;i++){
    users[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }

    });
}
function exit(){
    mogoose.disconnect();
}