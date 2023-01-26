const { Router } = require('express');

const pool = require('../db');

const router = Router();

router.get("/", async (req, res) => {
    const result = await pool.query("SELECT * FROM products;")
    res.send(result.rows)
})

router.delete("/:sku", async (req, res) => {
    const { sku } = req.params;
    const cant = await pool.query("SELECT * FROM products WHERE sku= $1; ", [sku])
    const array = [];
    const existencia = cant.rows[0]

    for (var i in existencia) {
        array.push([i, existencia[i]]);
    }
    const cantidad = array[3][1]
    cantidad - 1;
    if (cantidad == 0) {
        const empty = await pool.query("DELETE FROM products where sku= $1 ;", [sku])
        res.send("se acabo el producto")
    }
    const result = await pool.query("UPDATE products SET cantidad = $1 WHERE sku = $2 ;", [cantidad - 1, sku])
    const cambiado = await pool.query("SELECT * FROM products WHERE sku= $1; ", [sku])
    res.send(cambiado.rows)


})
router.post("/new", async (req, res) => {
    try {
        const { title, precio, cantidad } = req.body;
        const result = pool.query("INSERT INTO products (title, precio, cantidad) VALUES ($1, $2, $3) RETURNING *", [
            title,
            precio,
            cantidad
        ])

        res.send(result)
    } catch (error) {
        console.log(error.message);
    }
})


module.exports = router;
