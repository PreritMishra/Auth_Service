const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiroutes = require('./routes/index');

// const {User} = require('./models/index');
// const bcrypt = require('bcrypt');

const app = express();

const prepareAndStartServer = () => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiroutes);
    app.listen(PORT, async() => {
        console.log(`Server Started on Port: ${PORT}`);
        // const incomingpassword = '12344556';
        // const user = await User.findByPk(2);
        // const response = bcrypt.compareSync(incomingpassword, user.password);
        // console.log(response);
    });
}

prepareAndStartServer(); 