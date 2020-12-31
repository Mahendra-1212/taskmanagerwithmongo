const mongodb=require("mongodb");
const chalk=require('chalk');
const {MongoClient,ObjectId}=mongodb;

const connectionUrl="mongodb://127.0.0.1:27017";
const databaseName="task-manager";
var Id=new ObjectId();
console.log(Id.length);
console.log(Id);

MongoClient.connect(connectionUrl,{useNewUrlParser:true,useUnifiedTopology: true},(err,client)=>{
   if(err){
  return  console.log(chalk.red("error in connection to DataBase")+chalk.yellow(" :(user message)"));
   }
   console.log(chalk.green("connection done..."));
   const db=client.db(databaseName);
   console.log("got db name ");
  /* db.collection("user").insertOne({name:"mahendra kumar sahu",age:"26", study:"B-tech"},(err,result)=>{
   if(err){
       return console.log("error in insertation ");
   }
   console.log("successfully inserted ");
   console.log(result);

   });*/
  /* db.collection("tasks").insertMany([{task:"eating",status:true},{task:"studing",status:false},{task:"riding bike",status:false}],(err,result)=>{
       if(err){
           return console.log("err while inserting ");
       }
       console.log("succcessfully inserted");
       console.log(result.ops);
   })*/
   //console.log("successfully inserted a row for user");
 /*  db.collection("tasks").findOne({task:"eating"},(err,res)=>{
       if(err){
           return console.log(err);
       }
       console.log(res);
       client.close();
   });*/

  /* db.collection("tasks").find({task:"eating"}).toArray((err,users)=>{
       if(err){
           return console.log(err);
       }
       console.log(users);
   });*/
 /*  db.collection("tasks").updateOne({task:"studing"},{$set:{status:"true"}}).then(function(res){
       
       console.log(res);
       console.log("success !");
   }).catch(function(err){
       console.log(err);
   })
   */

  db.collection("tasks").updateMany({status:false},{$set:{status:true}}).then(function(res){
      console.log(res);
      console.log("success!");
  }).catch(function(err){
      console.log(err);
  })

});