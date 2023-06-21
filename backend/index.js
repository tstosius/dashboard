const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/v1/associations', (req, res) => {
  res.send(
  [
    {"name": "MyAsso0", "status": "ok"},
    {"name": "MyAsso1", "status": "ok"},
    {"name": "MyAsso2", "status": "ok"},
    {"name": "MyAsso3", "status": "nok"},
    {"name": "MyAsso4", "status": "ok"},
    {"name": "MyAsso5", "status": "ok"},
    {"name": "MyAsso6", "status": "nok"},
    {"name": "MyAsso7", "status": "ok"},
    {"name": "MyAsso8", "status": "ok"},
    {"name": "MyAsso9", "status": "ok"},
  ]
  );
});



const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
