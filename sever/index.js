const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.json({
        message:"OOP!"
    });

});
app.post('/pads', (req,res)=>{
    console.log(req.body);
});

app.listen(5000, () =>{
    console.log("Listening on http://localhost:5000")
})
