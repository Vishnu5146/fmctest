const express = require('express');
const app = express();
const path = require('path');

const Port = process.env.PORT || 1000;

app.use(express.static(path.join(__dirname, '../ClientSide', 'build')));

const data = {
    name: 'Vishnu vardhan balasundaram',
    Projectname: 'FindMyCourt'
}

if (true) {
    app.use(express.static('build'))
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'ClientSide', 'build', 'index.html'));
    })
}

app.get('/data', (req, res, next) => {
    res.send(data);
});

app.listen(Port);