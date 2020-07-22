const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Contact =require('./models/message');

const app = express();

mongoose.connect('mongodb+srv://miftahou:miftahou16@shoptest-9xrvk.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true,
useUnifiedTopology: true })
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

app.post('/api/message',(req,res, next)=>{
    console.log(req.body);
    delete req.body._id;
    const message = new Contact({
        ...req.body
    });
    message.save()
        .then( () => res.status(200).json({som : 'RayanDaxton'}))
        .catch((error) => res.status(400).json({error}));
});

app.get('/api/message',(req ,res) =>{
    Contact.find()
        .then((messages) => res.status(200).json(messages))
        .catch((error) => res.status(400).json({error}));
});
module.exports = app;