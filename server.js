const express = require('express');
const app = express();
const path = require('path');

const Port = process.env.port || 1000;
app.use(express.static(path.join(__dirname, './ClientSide', 'build')));

const bool = true

const data = {
    name: 'Vishnu vardhan balasundaram',
    Projectname: 'FindMyCourt'
}

if (process.env.buildType === "production") {
    app.use(express.static('build'))
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'ClientSide', 'build', 'index.html'));
    })
}

app.get('/data', (req, res, next) => {
    res.send(data);
});

app.listen(Port);