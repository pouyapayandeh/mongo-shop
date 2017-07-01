'use strict'

class UserAuth {

  * handle (request, response, next) {
    // here goes your middleware logic
    // yield next to pass the request to next middleware or controller
    const role = yield request.session.get('role');
    if(role == null)
    {
      response.status(401).send('Invalid credentials');
      return ;
    }else
      yield next
  }

}

module.exports = UserAuth;
