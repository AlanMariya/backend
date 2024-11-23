//1.importing using require
const express = require("express")


//2.initialize
const app= new express()
app.use(express.json());

//3.api creation
// app.get('/',(req,res)=>{
//     res.send("message from server")
// })
// app.get('/trail',(req,res)=>{
//     res.send("message from trail")
// })

const dbArray = [
    {name:"Alan",age:23},
    {name:"Alex",age:25},
];

app.get('/adduser',(req,res)=>{
    res.send(dbArray)
})

app.post("/view",(req,res)=>{
    console.log(req.body)
    dbArray.push(req.body)
    res.send("data added");
})
app.put("/edit",(req,res)=>{
    dbArray.splice(1,1,req.body);          //splice used to bring new data  to an existing data
    res.send("data updated successfully");
});
app.delete("/remove",(req,res)=>{
    dbArray.pop();
    res.send("data deleted");
})
//4.port
app.listen(8080,()=>{
    console.log("server is running on port 8080")
})
