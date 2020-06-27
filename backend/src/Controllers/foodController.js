const db = require('../db/db_connection');

module.exports = {

    async foodCreate(req, res){

        const {restid, namefood, pricefood, descriptionfood, image} = req.body;
        
        const insert = await db.query(
            'INSERT INTO foods_restaurant (restid, namefood, pricefood, descriptionfood, image) VALUES ($1,$2,$3,$4,$5)',
            [restid, namefood, pricefood, descriptionfood, image]
        );


        const {rows} = await db.query(
            'SELECT * FROM foods_restaurant WHERE restid=$1',
            [restid]
        );

        res.send(rows);


    },

    async updateFood(req, res){

        const {id, price} = req.body;

        let {rows} = await db.query(
            'UPDATE foods_restaurant SET pricefood=$1 WHERE idfood=$2',
            [price, id]
        );

        rows = await db.query(
            'SELECT * FROM foods_restaurant WHERE idfood=$1',
            [id]
        );

        res.send(rows.rows)

    },

    async deleteFood(req, res){
        const {id} = req.body;

        const {rows} = await db.query(
            'DELETE FROM foods_restaurant WHERE idfood=$1',
            [id]
        );

        res.send(rows);
    }
}