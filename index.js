const express = require('express');
const bodyParser = require('body-parser');
const { validDisplayName, validEmail, validPassword } = require('./middleware/Users');

const app = express();
app.use(bodyParser.json());
const Users = require('./controller/Users');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

 app.post('/user', validDisplayName, validEmail, validPassword, Users.createUsers);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
