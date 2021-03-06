'use strict'
const User = use('App/Model/User')
class UserController {
  * login(request, response) {
    var b = request.only('user', 'pass');
    console.log(b);
    const user = yield User.findOne({user: b.user, pass: b.pass});
    if (user != null) {
      console.log(user);

      yield response.sendView('login', {})

    }
    response.status(400).send('Invalid credentials');
    return;

  }

  * register(request, response) {
    let data = request.only('user', 'pass', 'type');
    console.log(data);
    let user = new User(data);
    yield user.save();
    yield response.sendView('login', {})

  }

  *logout(request, response) {
    yield request.session.forget('role');
    yield response.redirect('login')

  }
}

module.exports = UserController
