const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bestStudentRouter = require('./routes/bestStudent');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(cors())
app.use(express.json())

app.use('/bestStudent',bestStudentRouter)

async function main() {
    await mongoose.connect(uri)
    app.listen(port, () => {
        console.log(`server is running on port:${port} `);
    })
}
main()
