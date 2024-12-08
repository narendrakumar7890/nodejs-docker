//swagger setup
const { swaggerUi, swaggerSpecs } = require("./config/swagger.config");

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, { explorer: true })
);
