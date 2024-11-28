/**
 * Contains the miscellaneous route handlers.
 * @author Ezira Tigab <https://github.com/sutual>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send("Hello Holberton School!");
  }
}

export default AppController;
module.exports = AppController;
