//get app to start
const { log } = require("console");
const app = require("./Src/app");

//Create PORT : process.env.PORT ||3250 - dotenv
const PORT = 3050;
//start server
const server = app.listen(PORT, () => {
  console.log("Starting server at " + PORT);
});

//end
process.on("SIGINT", () => {
  server.close(() => {
    console.log("Exit Server Express");
  });
});
