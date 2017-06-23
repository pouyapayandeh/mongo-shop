'use strict'
const User = use('App/Model/User')
class UserController {
  * login (request, response) {
    console.log(request.only('user', 'pass'))
    const users = yield User.all();
    console.log(users);
    yield response.sendView('login', {})

  }
  * register (request, response) {
    let data =request.only('user', 'pass','type');
    console.log(data);
    let user = new User(data);
    yield user.save();
    yield response.sendView('login', {})

  }
}

module.exports = UserController
