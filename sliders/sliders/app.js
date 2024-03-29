const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Обработчик POST запроса
app.post('/submit', (req, res) => {
    const data = req.body; // Получаем данные из тела POST запроса
    console.log(data); 

  });
app.listen(port, () => {
  console.log(`Приложение запущено на http://localhost:${port}`);
});