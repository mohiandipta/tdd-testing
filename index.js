const express = require('express')
const app = express()

app.get("/", (req, res, next) => {
 res.send('getting data');
});

app.listen(3000, () => {
    console.log('server is running')
})