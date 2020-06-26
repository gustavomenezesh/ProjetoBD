const db = require('../db/db_connection');

module.exports = {

    async create(req, res){

        const {tipo, clientName, clientEmail, clientAdress, clientPass} = req.body;

        const {rows} = await db.query(
            'INSERT INTO clients (clientName, clientEmail, clientAdress, clientPass, tipo) VALUES ($1, $2, $3, $4, $5)',
            [clientName, clientEmail, clientAdress, clientPass, tipo]
        );


        res.send({
            message: "Client added successfully!",
            body: {
                client: {clientName, clientEmail, clientAdress, clientPass}
            }
        });

    },

    async update(req, res){

        const {clientEmail, clientAdress, clientPass} = req.body;

        const {rows} = await db.query(
            'UPDATE clients SET clientAdress = $2 WHERE clientEmail = $1 AND clientPass = $3',
            [clientEmail, clientAdress, clientPass]
        );

        console.log(rows);

        res.send({
            message: "Adress updated successfully!",
            body: {
                client: {clientEmail, clientAdress, clientPass}
            }
        });
    },

    async login(req, res){
        
        const {email, pass} = req.body;
        
        let rows = await db.query(
            'SELECT * FROM clients WHERE clientEmail=$1 AND clientPass=$2',
            [email, pass]
        );
        
        if(!rows.rows.length){
            rows = await db.query(
                'SELECT * FROM restaurants WHERE restemail=$1 AND restpass=$2',
                [email, pass]
            );
        }

        res.send(rows.rows);
       
    },

    async index(req, res){

        const { id } = req.params;

        const { rows } = await db.query(
            'SELECT * FROM clients WHERE clientid=$1',
            [id]
        );

        res.send(rows);
    }
}