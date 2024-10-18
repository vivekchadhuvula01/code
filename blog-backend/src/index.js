import express from 'express';

const app = express();

app.listen(4567, () => {
    console.log(`server is running on port http://localhost:${4567}`);
})

app.get('/', (req, res) => { 
    res.send("hello")
})