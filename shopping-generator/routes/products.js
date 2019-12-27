const express = require('express');
var router = express.Router();
var connection = require('../connection');

router.get('/', (req, res) => {
  connection.query("Select * from Ecommerce.products", (err, rows, fields) => {
    if (err) throw err;
    res.send(rows);
  });
});

router.get('/:id', (req, res) => {
  connection.query("Select * from Ecommerce.products where id=?", [req.params.id], (err, rows, fields) => {
    if (err) throw err;
    res.send(rows[0]);
  })
});

router.get('/delete/:id', (err, rows, fields) => {
  connection.query("Delete from Ecommerce.products where product_id=?", [res.params.id], (err, rows, fields) => {
    if (err) throw err;
    res.send({
      msg: 'Data deleted successfylly',
      status: "OK"
    })
  });
});

router.post('/', (req, res) => {
  let product_name = req.body.product_name;
  let price = req.body.price;
  let status = req.body.status;
  let created_at = req.body.created_at;
  let updated_at = req.body.updated_at;
  let image = req.body.image;
  let product_desc = req.body.product_desc;
  connection.query("Insert into `Ecommerce.products` (`product_name`,`price`,status`,`created_at`,`updated_at`,`image`,`product_desc`) \
  values(?,?,?,?,?,?,?)", [product_name, price, status, created_at, updated_at, image, product_desc],
    (err, rows, fields) => {
      if (err) throw err;
      res.send({
        msg: "Data sent Successfully",
        status: "OK"
      })
    })
});

router.post('/update/:id', (req, res) => {
  let product_name = req.body.product_name;
  let price = req.body.price;
  let status = req.body.status;
  let created_at = req.body.created_at;
  let updated_at = req.body.updated_at;
  let image = req.body.image;
  let product_desc = req.body.product_desc;
  connection.query("Update Ecommerce.products set \
  product_name=?,price=?,status=?,created_at=?,updated_at=?,image=?,product_desc=? where product_id=?",
    [product_name, price, status, created_at, updated_at, image, product_desc],
    (err, rows, fields) => {
      if (err) throw err;
      res.send({
        msg: "Data updated Successfully",
        status: "OK"
      })
    })
});

module.exports = router;