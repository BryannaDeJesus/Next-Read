const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.status(200).send('Homepage');
});




app.listen(3000, () => console.log('Server running on port: http://localhost:3000'));
