//require modules
const express = require('express');
const morgan = require('morgan');
const storyRoutes = require('./routes/storyRoutes');

//create the app
const app = express();

//configure the app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

//mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));

//set up routes
app.get('/', (req, res)=>{
    res.render('index');
});

app.use('/stories', storyRoutes);

//start the server
app.listen(port, host, ()=>{
    console.log('hosted at http://localhost:3000');
});