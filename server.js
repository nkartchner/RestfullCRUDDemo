const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public/dist/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./server/routes/task.routes')(app);
require('./server/config/mongoose.config');

app.listen(8000, function() {
  console.log('Running server on port 8000');
});
