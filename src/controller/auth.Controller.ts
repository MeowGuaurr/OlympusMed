import * as express from 'express';
import User from '../interfaces/authInterface';


class AuthController{
  public path = '/auth'
  public router = express.Router();
  private user : User = null;

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes(){
    this.router.post(`${this.path}/register`, this.postRegisterData);
    this.router.post(`${this.path}/login`, this.postLoginData)
  }

  postRegisterData = (request: express.Request, response: express.Response) => {
    response.send(request.body);
  }

  postLoginData = (request: express.Request, response: express.Response) => {
    const {username, password}: User = request.body;
    response.send({username, password});
  }
}

export default AuthController;
