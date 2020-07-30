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

        const {id, price, restid} = req.body;

        const now = new Date();

        try{
        
            let {rows} = await db.query(
                'SELECT * FROM foods_restaurant WHERE id=$1',
                [id]
            );
            
            function roundToXDigits(value, digits) {
                if(!digits){
                    digits = 2;
                }
                value = value * Math.pow(10, digits);
                value = Math.round(value);
                value = value / Math.pow(10, digits);
                return value;
            }

            //console.log(rows);
            let percent = 100 - 100*price/rows[0].price;
            percent = roundToXDigits(percent, 1);
            console.log(percent);

            
            const desc1 = await db.query(
                'SELECT * FROM desconto WHERE food=$1',
                 [id]
            );
            
        
            if(desc1.rows.length){
                rows = await db.query(
                    'UPDATE desconto SET validade=false WHERE food=$1',
                    [id]
                );
                console.log('oi');
            }
                

            const desc2 = await db.query(
                'INSERT INTO desconto (percent, data, food, validade, restid) VALUES ($1, $2, $3, $4, $5)',
                [percent, now, id, true, restid]
            );

        }catch(e){
            console.log(e);
        }

        res.send({mnsg: "preço atualizado"})

    },

    async deleteFood(req, res){
        const {id} = req.body;

        const {rows} = await db.query(
            'DELETE FROM foods_restaurant WHERE id=$1',
            [id]
        );

        const deleted = await db.query(
            'DELETE FROM desconto WHERE food=$1',
            [id]
        );


        res.send(rows);
    },

    async searchFood(req, res){
        
        const {name} = req.query;
        
        const {rows} = await db.query(
            'SELECT * FROM foods_restaurant WHERE name LIKE $1',
            [`%${name}%`]
        );


        res.send(rows);

    },

    async menu(req, res){

        const {id} = req.query;

        const menu = [];
        
        const {rows} = await db.query(
            'SELECT * FROM foods_restaurant WHERE restid = $1',
            [id]
        );

        for(let i = 0; i < rows.length; i++){

            const promo = await db.query(
                'SELECT * FROM desconto WHERE food = $1 AND validade=$2',
                [rows[i].id, true]
            );

            if(promo.rows.length){
                menu.push({
                        id: rows[i].id,
                        name: rows[i].name, 
                        price: rows[i].price, 
                        description: rows[i].description, 
                        image: rows[i].image,
                        percent: promo.rows[0].percent});
            }
            else{
                menu.push({
                    id: rows[i].id,
                    name: rows[i].name, 
                    price: rows[i].price, 
                    description: rows[i].description, 
                    image: rows[i].image,
                    percent: 0});
            }    

        }

        res.send(menu);

    }
}