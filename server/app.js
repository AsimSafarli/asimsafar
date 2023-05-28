import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
const app = express();
const access ={
    origin : "http://localhost:3000"
}
app.use(cors(access))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.json({ message: 'Home Page' });
  });
app.get('/api', (req, res) => {
  res.json({ message: 'Express and React work in same port' });
});

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Listen ${port}`);
});
