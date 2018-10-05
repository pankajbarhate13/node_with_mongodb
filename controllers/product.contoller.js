const Product = require("../models/product.model");

module.exports={
  test:(req, res)=>{
    res.send({message:'Greetings from the Test controller!'});
  },

  product_create:(req, res)=>{
    let product = new Product(
      {
        name: req.body.name,
        price: req.body.price,
        qty: req.body.qty
      }
    );
    product.save(function(err, product ){
      if(err){
        res.send({ status: 400, message: err["name"]});
      }
      else{
        res.send({ data: product, status: 200, message: "product created successfully!"});
      }
    });
  },

  product_details:(req,res)=>{
    Product.findById(req.params.id, function (err, product) {
      if (err) {
        res.send({status: 400, message: "Bad Request"})
      }
      else{
        res.send({ data: product, status: 200, message: "Product Details" });
      }
    })
  },

  product_update:(req, res)=>{
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
      if (err) {
        res.send({status: 400, message: err["name"]})
      }
      else{
        res.send({ data: product, status: 200, message: "Product Updated Successfully!" });
      }
    });
  },

  product_delete:(req,res)=>{
    Product.findByIdAndRemove(req.params.id, function (err) {
      if (err) {
        res.send({status: 400, message: err["name"]})
      }
      else{
        res.send({ data: product, status: 200, message: "Product 'Deleted successfully!" });
      }
    });
  }
}