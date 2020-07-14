const db = require('../db/db_connection');

module.exports = {

    async create(req, res){

        const {name, email, adress, pass, tipo, image} = req.body;

        const {rows} = await db.query(
            'INSERT INTO clients (name, email, adress, pass, tipo, image) VALUES ($1, $2, $3, $4, $5, $6)',
            [name, email, adress, pass, tipo, image]
        );


        res.send({
            message: "Client added successfully!",
            body: {
                client: {name, email, adress, pass, tipo}
            }
        });

    },

    async update(req, res){

        const {name, email, adress, pass, image} = req.body;

        let {rows} = await db.query(
            'UPDATE clients SET adress = $2 WHERE email = $1',
            [email, adress]
        );

        rows = await db.query(
            'UPDATE clients SET name = $2 WHERE email = $1',
            [email, name]
        );

        rows = await db.query(
            'UPDATE clients SET pass = $2 WHERE email = $1',
            [email, pass]
        );

        rows = await db.query(
            'UPDATE clients SET image = $2 WHERE email = $1',
            [email, image]
        );

        res.send({
            message: "Adress updated successfully!",
            body: {
                client: {name, email, adress, pass}
            }
        });
    },

    async login(req, res){
        
        const {email, pass} = req.body;
        
        let rows = await db.query(
            'SELECT * FROM clients WHERE email=$1 AND pass=$2',
            [email, pass]
        );
        
        if(!rows.rows.length){
            rows = await db.query(
                'SELECT * FROM restaurants WHERE email=$1 AND pass=$2',
                [email, pass]
            );
        }

        res.send(rows.rows);
       
    },

    async do_order(req, res){

        const {idclient, idfoods, value} = req.body;
        
        console.log(idfoods.toString());

        const date = new Date();

        try{
            let {rows} = await db.query(
                'INSERT INTO pedido (idfoods, value, client, data_pedido) VALUES ($1, $2, $3, $4)',
                [idfoods.toString(), value, idclient, date]
            );
        }catch(e){
            console.log(e.detail);
        }

        res.send({idfoods, value, idclient, date});

    },

    async filterOrders(req, res){

        const {id} = req.query;
        
        const { rows } = await db.query(
            'SELECT * FROM pedido WHERE client=$1',
            [id]
        );
        
        res.send(rows);

    }

    
}