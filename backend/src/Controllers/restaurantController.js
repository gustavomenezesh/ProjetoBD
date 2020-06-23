const db = require('../db/db_connection');

module.exports = {

    async create(req, res){
        const {restname, restemail, restadress, restpass, restcateg, status, tipo} = req.body;
        //restCateg.toString();
        

        const {rows} = await db.query(
            'INSERT INTO restaurants (restname, restemail, restadress, restpass, restcateg, status, tipo) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [restname, restemail, restadress, restpass, restcateg, status, tipo]
        );

        res.send({
            message: "Restaurant added successfully!",
            body: {
                restaurant: {restname, restemail, restadress, restpass, restcateg, tipo}
            }
        });
    },

    async categs(req, res){
        const {rows} = await db.query(
            'SELECT * FROM categorias',[]
        );

        res.send(rows);
    }


}