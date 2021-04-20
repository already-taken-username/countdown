const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.set('port', process.env.PORT || 8080);
    const server = app.listen(app.get('port'), () => {
    console.log(`Listening on ${ server.address().port }`);
});