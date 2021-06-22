const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/item.routes'));

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://Admin:11qqaa@cluster0.huyrw.mongodb.net/garbage?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        }).then(() => {
            app.listen(port, () => {
                console.log(`Server has been started on port ${port}...`)
            });
        })
    } catch (e) {
        console.log(e);
    }
}

start();
