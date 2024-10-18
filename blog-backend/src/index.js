import express from 'express';

const app = express();
app.use(express.json());
app.listen(4567, () => {
    console.log(`server is running on port http://localhost:${4567}`);
})

app.get('/', (req, res) => { 
    res.send("hello")
})
app.post('/article', (req, res) => { 
    console.log(req.body)
    res.send(`here is your ${req.body.article}`)
})