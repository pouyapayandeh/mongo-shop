/**
 * Created by Pouya Payandeh on 6/30/2017.
 */
'use strict'
const Product = use('App/Model/Product')
class ProductController {
  * login (request, response) {
    // console.log(request.only('user', 'pass'))
    // const users = yield User.all();
    // console.log(users);
    // yield response.sendView('login', {})

  }
  * register (request, response) {
    // let data =request.only('user', 'pass','type');
    // console.log(data);
    // let user = new User(data);
    // yield user.save();
    // yield response.sendView('login', {})

  }
  * add(request , response)
  {
      var product = request.only('title','price','type','category','brand');
      let props = request.collect('prop','value');
      console.log(props);
      product['properties'] = {}
      for(var i = 0 ; i < props.length; i++)
      {
        if(props[i].prop != null)
          product['properties'][props[i].prop] = props[i].value;
      }
      let p = new Product(product);
      yield p.save();
      console.log(product);
      yield response.sendView('add-edit-product', {})
  }

  * index(request , response)
  {
    const productsDB = yield Product.all();

    var products = yield productsDB.map((product) => {
      return product.get();
    });
    console.log(products);
    yield response.sendView('list-product', {products:products})
  }
  * delete(request , response)
  {
    const id = request.param('id');
    console.log(id);
    var product = yield Product.where('_id', id).findOne();
    console.log(product);
    product.remove();

    yield response.redirect('/product')
  }
}

module.exports = ProductController
