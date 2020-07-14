const db = require('../db/db_connection');

module.exports = {

    async create(req, res){
        const {name, email, adress, pass, categ, status, tipo, image, entrega} = req.body;
        //restCateg.toString();
        

        let {rows} = await db.query(
            'INSERT INTO restaurants (name, email, adress,pass, categ, status, tipo, entrega) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            [name, email, adress, pass, categ, status, tipo, image, entrega]
        );

        rows = await db.query(
            'SELECT * FROM restaurants WHERE email=$1 AND pass=$2',
            [email, pass]
        );

        const restid = rows.rows[0].id;
        console.log(id);

        const string_categ = categ.toString();
        
        const categs = string_categ.split(',');
            
        for(let i = 0; i < categs.length; i++)
            categs[i]=Number(categs[i]);
        console.log(categs);    
            
        for(let i = 0; i < categs.length; i++){
            const insert = await db.query(
                'INSERT INTO restaurant_categ (restid, idcateg) VALUES ($1, $2)',
                [restid, categs[i]]
            );
        }
        
        res.send(rows.rows[0]);
    },

    async categs(req, res){
        const {rows} = await db.query(
            'SELECT * FROM categorias',[]
        );

        res.send(rows);
    },


    async index(req, res){

        const {rows} = await db.query(
            'SELECT * FROM restaurants', []
        );

        res.send(rows);
    
    },


    async searchBycateg(req, res){
        const { id } = req.params;
        const datas = []

        console.log('id back:'+ id);

        const {rows} = await db.query(
            'SELECT * FROM restaurant_categ WHERE idcateg=$1',
            [id]
        );

        for(let i = 0; i < rows.length; i++){
            const obj = await db.query(
                'SELECT * FROM restaurants WHERE id=$1 AND status=$2',
                [rows[i].id, true]
            );
            datas.push(obj.rows[0]);
        }
        res.send(datas);
            
    },

    async searchByName(req, res){

        const {name} = req.query;
        
        const {rows} = await db.query(
            'SELECT * FROM restaurants WHERE name LIKE $1 AND status = $2',
            [`%${name}%`, true]
        );

        res.send(rows);

    }


}