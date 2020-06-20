const db = require('../db/db_connection');

module.exports = {

    async create(req, res){

        const {clientName, clientEmail, clientAdress, clientPass} = req.body;

        const {rows} = await db.query(
            'INSERT INTO clients (clientName, clientEmail, clientAdress, clientPass) VALUES ($1, $2, $3, $4)',
            [clientName, clientEmail, clientAdress, clientPass]
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
    }
}