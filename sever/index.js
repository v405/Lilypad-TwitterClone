const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.json({
        message:"OOP!"
    });

});

function isValidPad(pad)  {
    return pad.name && pad.name.toString().trim() !== '' &&
    pad.content && pad.content.toString().trim() !== '';

}

app.post('/pads', (req, res)=>{
    if(isValidPad(req.body)){
        //inserts into db...
        const pad = {
            name: req.body.nane.toString(),
            content: req.body.content.toString()
        };
        console.log(pad);
    } else {
        res.status(422);
        res.json({
            message: "Alias and Content Required"
        });
    }
});

app.listen(5000, () =>{
    console.log("Listening on http://localhost:5000")
});
