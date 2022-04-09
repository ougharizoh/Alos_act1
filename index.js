const express = require('express');
const app = express();
const travelings = require('./hopital.json');


app.use(express.json());

app.get('/hopitals', (req, res) => {
    res.status(200).json(hopitals);
});

app.get('/hopitals/:id', (req, res) => {
    const id = parseInt (req.params.id
    const hopital = hopitals.find(hopital => hopital.id === id)
    res.status(200).json(hopital);
});


app.post('/hopitals', (req,res) => {
    hopitals.push(req.body)
    res.status(200).json(hopitals)
})
app.post('/hopitals', (req,res,next) => {
    delete req.body._id;
    const hopital = new hopital( {... req.body
        });
    hopital.save()
    .then(()=> res.status(201).json( {
        message :"hopital added"
    }))
    .catch(error=> res.status(400).json( {
        error
    }));
    });
app.put('/hopitals/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let hopital = hopitals.find(hopital => hopital.id === id)
    hopital.name =req.body.name,
    hopital.adresse =req.body.adresse,
    hopital.type =req.body.type,
    res.status(200).json(hopital)
})

app.delete('/hopitals/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let hopital = hopitals.find(hopital => hopital.id === id)
    hopitals.splice(hopitals.indexOf(hopital),1)
    res.status(200).json(hopitals)
})

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})


