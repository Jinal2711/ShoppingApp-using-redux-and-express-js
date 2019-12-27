const express = require('express');
var router = express.Router();
var connection = require('../connection');

router.get('/', (req, res) => {
  connection.query("Select * from Ecommerce.category", (err, rows, fields) => {
    // console.log(res);
    if (err) throw err;
    res.send(rows);
  });
});

router.get('/:id', (req, res) => {
  connection.query("Select * from Ecommerce.category where category_id=?", [req.params.id], (err, rows, fields) => {
    if (err) throw err;
    res.send(rows[0]);
  });
});

router.post('/', (req, res) => {
  let category_name = req.body.name;
  let category_desc = req.body.desc;
  connection.query("Insert into `category` (`category_name`,`category_desc`) values (?,?)", [category_name, category_desc], (err, rows, fields) => {
    if (err) throw err
    res.send({
      msg: "Data Sent Successfully",
      status: "OK"
    })
  });
});

router.post("/update/:id", (req, res) => {
  let category_name = req.body.category_name;
  let category_desc = req.body.category_desc;
  connection.query("Update Ecommerce.category set category_name=?,category_desc=? where category_id=?", [category_name, category_desc, req.params.id], (err, rows, fields) => {
    if (err) throw err;
    res.send({
      msg: "Data updated successfully",
      status: "OK"
    });
  });
});

router.get("/delete/:id", (req, res) => {
  connection.query("Delete from Ecommerce.category where category_id=?", [req.params.id], (err, rows, fields) => {
    if (err) throw err;
    res.send({
      msg: "Data deleted successfully",
      status: "OK"
    });
  });
});
module.exports = router;