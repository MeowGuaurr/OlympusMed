import * as express from 'express'
import * as bodyParser from 'body-parser'
const morgan = require('morgan')

class App{
  public app: express.Application;
  public port = 3000;

  constructor(controllers, port) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.urlencoded({ extended: true }))
    this.app.use(bodyParser.json());
    this.app.use(morgan('combined'));
  }

  private initializeControllers(controllers)
  {
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('listening on port ' + this.port);
    });
  }
}

export default App;
