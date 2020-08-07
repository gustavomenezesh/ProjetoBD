const db = require('../db/db_connection');
const gdrive = require('../../utils/gdrive');

module.exports = {

    async create(req, res){

        const {name, email, adress, pass, tipo} = req.body;

        gdrive.imageUpload(`${name}.png`, "./uploads/image.jpg", async (link) => {
            console.log(link);
            const {rows} = await db.query(
                'INSERT INTO clients (name, email, adress, pass, tipo, image) VALUES ($1, $2, $3, $4, $5, $6)',
                [name, email, adress, pass, tipo, link]
            );


            res.send({
                message: "Client added successfully!",
                body: {
                    client: {name, email, adress, pass, tipo, link}
                }
            });
        });
        

    },

    async update(req, res){

        const {id, name, email, adress, newpass} = req.body;
        const pass = newpass;
        console.log(req.body);

        if ( adress !== '' ) {
            let { rows } = await db.query(
                'UPDATE clients SET adress = $2 WHERE id = $1',
                [id, adress]
            );
        }
        if ( name !== '' ){
            rows = await db.query(
                'UPDATE clients SET name = $2 WHERE id = $1',
                [id, name]
            );
        }
        if ( pass !== '' ){
            rows = await db.query(
                'UPDATE clients SET pass = $2 WHERE id = $1',
                [id, pass]
            );
        }
        if ( email !== '' ){
            rows = await db.query(
                'UPDATE clients SET email = $2 WHERE id = $1',
                [id, email]
            );
        }


        res.send({
            message: "Adress updated successfully!",
            body: {
                client: {name, email, adress, pass}
            }
        });
    },

    async findUser(req, res) {

        const { id } = req.params;

        const {rows} = await db.query(
            'SELECT * FROM clients WHERE id=$1',
            [id]
        );

        res.send(rows);

    },

    async login(req, res){
        
        const {email, pass} = req.body;
        console.log({email, pass});
        
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
        console.log(rows.rows)
       
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

        const del = await db.query(
            'DELETE FROM car WHERE client=$1',
            [idclient]
        );

        res.send({idfoods, value, idclient, date});

    },

    async filterOrders(req, res){

        const {id} = req.query;
        
        const { rows } = await db.query(
            'SELECT * FROM pedido WHERE client=$1',
            [id]
        );
     
        const sortedOrders = rows.sort((a, b)=>{
            return b.data_pedido - a.data_pedido
        })
        
        res.send(sortedOrders);

    }

    
}