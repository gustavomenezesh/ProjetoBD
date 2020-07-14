const db = require('../db/db_connection');

module.exports = {

    async foodCreate(req, res){

        const {restid, name, price, description, image} = req.body;
        
        const insert = await db.query(
            'INSERT INTO foods_restaurant (restid, name, price, description, image) VALUES ($1,$2,$3,$4,$5)',
            [restid, name, price, description, image]
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
            'UPDATE foods_restaurant SET price=$1 WHERE id=$2',
            [price, id]
        );

        rows = await db.query(
            'SELECT * FROM foods_restaurant WHERE id=$1',
            [id]
        );

        res.send(rows.rows)

    },

    async deleteFood(req, res){
        const {id} = req.body;

        const {rows} = await db.query(
            'DELETE FROM foods_restaurant WHERE id=$1',
            [id]
        );

        res.send(rows);
    },

    async searchFood(req, res){
        
        const {name} = req.query;
        console.log(name);
        const {rows} = await db.query(
            'SELECT * FROM foods_restaurant WHERE name LIKE $1',
            [`%${name}%`]
        );

        res.send(rows);

    }
}