const express = require('express')

const app = express()

app.get('/testapi1', (req, res) => {
    return res.json({
        result: true,
        message: "Test API 1 successed!"
    })
})

app.get('/testapi2', (req, res) => {
    return res.json({
        result: false,
        message: "Test API 2 failed!"
    })
})

app.listen(8000, () => {
    console.log('start with 8000')
})