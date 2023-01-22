const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const apiroutes = require('./routes/index');

const db = require('./models/index');

// const UserService = require('./services/user-service');

const app = express();

const prepareAndStartServer = () => {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api', apiroutes);
    app.listen(PORT, async() => {
        console.log(`Server Started on Port: ${PORT}`);

        if(process.env.DB_SYNC) {
            db.sequelize.sync({alter: true});
        }

              
        // const service = new UserService();
        // const newToken = service.createToken({email: 'prerit1@admin.com', id: 1});
        // console.log("new token is", newToken);
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByZXJpdDFAYWRtaW4uY29tIiwiaWQiOjEsImlhdCI6MTY3Mzk2NTkxNSwiZXhwIjoxNjczOTY5NTE1fQ.6GWaSqB75hpISzkKWTN9lFjnil4vSGXMWRnsPsa-5Ao';
        // const response = service.verifyToken(token);
        // console.log(response);

    });
}

prepareAndStartServer(); 