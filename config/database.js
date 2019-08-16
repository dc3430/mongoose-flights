var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/flights', 
    {useNewUrlParser: true, useCreateIndex: true}
);

