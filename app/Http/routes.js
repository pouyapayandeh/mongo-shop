'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.on('login').render('login')
Route.post('login', 'UserController.login')
Route.on('register').render('register')
Route.on('search').render('search')
Route.on('card').render('shopping-list')
Route.post('register', 'UserController.register')
//Product
Route.group('auth-routes',() =>
{
  Route.get('logout', 'UserController.logout');
  Route.on('/product/add').render('add-edit-product');
  Route.post('/product/add', 'ProductController.add');
  Route.get('/product/','ProductController.index');
  Route.get('/product/delete/:id','ProductController.delete');
}).middleware('myAuth');

