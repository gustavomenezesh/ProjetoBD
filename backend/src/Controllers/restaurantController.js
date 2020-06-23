const db = require('../db/db_connection');

module.exports = {

    async create(req, res){
        const {restName, restEmail, restAdress, restPass, restCateg} = req.body;

        const {rows} = await db.query(
            'INSERT INTO restaurants (restName, restEmail, restAdress, restPass, restCateg) VALUES ($1, $2, $3, $4, $5)',
            [restName, restEmail, restAdress, restPass, restCateg]
        );

        res.send({
            message: "Restaurant added successfully!",
            body: {
                restaurant: {restName, restEmail, restAdress, restPass, restCateg}
            }
        });
    }

}