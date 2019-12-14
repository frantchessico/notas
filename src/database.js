const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://savanapoint:Luisa@jaime1996@cluster0-jrhmu.mongodb.net/test?retryWrites=true&w=majority/node-login-app', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify:false,
}).
then(() => console.log('DB is connected'))
.catch(() => console.log('error'))

//mongodb://localhost/EmployeeDB

// mongodb+srv://savanapoint:Luisa@jaime1996@cluster0-jrhmu.mongodb.net/test?retryWrites=true&w=majority/node-login-app