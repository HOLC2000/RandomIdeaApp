const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db')

connectDB();

const app = express();
 
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use(cors())



app.get('/', (req, res) => { 
    res.json({ message: 'Welcome to the random ideas API'})
})

const ideaRouter = require('./routes/ideas')
app.use('/api/ideas', ideaRouter)

app.listen(port, () => console.log(`listening on port ${port}`))
