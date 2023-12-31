const express = require('express')
const cheerio = require('cheerio');
const axios = require('axios');

const cors = require("cors");

const port = process.env.PORT || 8048;

const app = express()

app.use(cors());
app.options('*', cors())

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // console.log('Main Server here on port 5001')
    res.render('index', { text: "Text from render working great" })
})



const scrapRouter = require('./routes/footranking')

app.use('/footranking', scrapRouter)


app.listen(port, () => {
    console.log(`Footserver fired on port ${port} 🚀`);
});
