const db = require('../db/db_connection');

module.exports = {

    async create(req, res){
        const {restname, restemail, restadress, restpass, restcateg, status, tipo, image} = req.body;
        //restCateg.toString();
        

        let {rows} = await db.query(
            'INSERT INTO restaurants (restname, restemail, restadress, restpass, restcateg, status, tipo) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [restname, restemail, restadress, restpass, restcateg, status, tipo]
        );

        rows = await db.query(
            'SELECT * FROM restaurants WHERE restemail=$1 AND restpass=$2',
            [restemail, restpass]
        );

        const restid = rows.rows[0].restid;
        console.log(restid);

        const string_categ = restcateg.toString();
        
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

    async foodCreate(req, res){

        const {restid, namefood, pricefood, descriptionfood} = req.body;
        
        const insert = await db.query(
            'INSERT INTO foods_restaurant (restid, namefood, pricefood, descriptionfood) VALUES ($1,$2,$3,$4)',
            [restid, namefood, pricefood, descriptionfood]
        );
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
                'SELECT * FROM restaurants WHERE restid=$1',
                [rows[i].restid]
            );
            datas.push(obj.rows[0]);
        }
        res.send(datas);
            
    }


}