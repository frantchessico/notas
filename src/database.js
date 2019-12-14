const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify:false,
}).
then(() => console.log('DB is connected'))
.catch(() => console.log('error'))

//mongodb://localhost/EmployeeDB
