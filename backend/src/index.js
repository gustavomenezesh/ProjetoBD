const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

<<<<<<< HEAD

=======
>>>>>>> 80c172d1858d0d3cf5dd9233379fdac590c69e1b
app.listen(3333,()=>{
    console.log('Backend funcionando');
})