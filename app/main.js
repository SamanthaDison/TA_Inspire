import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { TodosController } from "./Controllers/TodosController.js";
import { UserController } from "./Controllers/UserController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  weatherController = new WeatherController()
  imageController = new ImageController()
  quoteController = new QuoteController()
  todosController = new TodosController()
  clockController = new ClockController()
  userController = new UserController()
}
loadState()
window["app"] = new App();
