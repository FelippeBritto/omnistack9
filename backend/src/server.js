const express = require('express');
const mongoose = require('mongoose');

//Cors protege o backend de acessos sem permissâo
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://root:<SENHA>@cluster0-gtqsa.mongodb.net/test?retryWrites=true&w=majority',
   {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   });

//essa configuração do cors permite que qqr app acesse a api
app.use(cors({}));
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json()); //informando que será usado json
app.use(routes);

app.listen(3333);


