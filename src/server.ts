import AuthController from './controller/auth.Controller';
import App from './app';

const app = new App(
  [
    new AuthController(),
  ],
  3000,
);

app.listen();

/**
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(morgan('combined'))
app.use('/auth', authClass)

app.listen(3000, () => {
  console.log('Express server listening on port 3000')
})
*/
