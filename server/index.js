const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const books = require('./controllers/books_controller')

app.use(bodyParser.json());
app.use(express.static( __dirname + "/../build") );

app.get('/api/books', books.read);
app.post('/api/books', books.add);
app.put('/api/books/:id', books.update)
app.delete('/api/books/:id', books.delete)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Port is listening on Port ${PORT}`);
});

