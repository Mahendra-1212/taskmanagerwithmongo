const data=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("data updated successfully");

    },4000);
});

data.then(function(result){
    console.log(result);
}).catch(function(err){
    console.log(err);
}).finally(function(){
    console.log("disconnect db connection");
})