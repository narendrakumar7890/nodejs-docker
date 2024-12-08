/**
 * @swagger
 * /getUsers:
 *   get:
 *     summary: Retrieve a list of users.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: The user ID.
 *                         example: 0
 *                       username:
 *                         type: string
 *                         description: The user's name.
 *                         example: buraker
 *                       password:
 *                         type: string
 *                         description: The user's password.
 *                         example: 24af3535
 *                       email:
 *                         type: string
 *                         description: The user's email.
 *                         example: test@example.com
 */

module.exports = (app) => {
  const User = require("../controllers/user.controller.js");
  const bodyParser = require("body-parser");
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/getUserByName/:username", User.findUserByName);
  app.get("/getUserById/:id", User.findUserById);
  app.get("/getUsers", User.findUsers);
  app.post("/addUser", User.createNewUser);
  app.put("/editUserByName/:username", User.updateByName);
  app.put("/editUserById/:id", User.updateById);
  app.delete("/deleteUserById/:id", User.deleteUserById);
};
