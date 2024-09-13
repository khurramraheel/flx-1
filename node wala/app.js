// npm install express

let myExpress = require('express');
let cors = require('cors');

let meriApp =  myExpress();

// takay doosre domain(origins) ki sites is server se contact kar saken
meriApp.use(cors());

// agar client side se json m data araha to yeh json add krna hoga middleware m
meriApp.use(myExpress.json());  

// NodeJS m middlewares app.use() function kay andr paas karte hn

// meriApp.use(function(req, res, next){
//     console.log("middleware chali 1")
//     res.json({success:40})
// })

meriApp.use(function(req, res, next){
    console.log("middleware chali 2")
    next();
})


meriApp.post('/hello', (req, res)=>{
    
    // incoming data body m aata h 
    console.log(req.body)

    res.json({success:true});
})

// node se 3 response jate hn
// res.json() JS ki koi cheez send karni
// res.end() string send krna 
// res.sendFile() file send krni

meriApp.get('/admin', (req, res)=>{
    res.sendFile(process.cwd() + '/2.png' );
})

meriApp.get('/signup', (req, res)=>{
    res.end("hi g")
})

meriApp.get('/login', (req, res)=>{
    res.json({
        success:'haha'
    })
})

// agar node se html ki files browser per rendering karni hon
meriApp.use(myExpress.static(process.cwd()+'/node wala/meri-website'))

meriApp.listen(7080, function(){
    console.log('server chal paring');
})



// console.log(20)
// import {} from 'some/' sysyem JS format
// let a = require('some') commonjS format