const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
//Initialization
const app = express();
require('./database');

//Settings
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 4200)
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
//para utilizarmos views
app.set('view engine', '.hbs');

//Middleware

app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'myscretapp',
    resave: true,
    saveUninitialized: true
}));

//Gloabal Variables

//Routes

app.use(require('./routes/routes'));
app.use(require('./routes/users'));
app.use(require('./routes/notes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

//Server is listenning

app.listen(app.get('port'), (req, res) => {
    console.log(`servidor está escutando a porta ${app.get('port')}`);
});
