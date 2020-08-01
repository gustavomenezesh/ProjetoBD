const db = require('../db/db_connection');
const { response } = require('express');
const gdrive = require('../../utils/gdrive');
const base64ToImage = require('base64-to-image');
const { index, create } = require('./restaurantController');

module.exports = {

    async index(req, res){

        const { rows } = await db.query('SELECT * FROM car', []);

        res.send(rows);

    },

    async add(req, res){

        const { food, qnt, client } = req.body;

        const insert = await db.query(
            'INSERT INTO car (food, qnt, client) VALUES ($1, $2, $3)',
            [food, qnt, client]
        );

    },

    async remove(req, res){

        const { id } = req.body;

        const del = await db.query(
            'DELETE FROM car WHERE id=$1', [id]
        );
    },

    /* async finish(req, res){

    } */

}