module.exports = app => {
  const marqs = require("../controllers/marq.controller.js");
  
  // Create a new marq
  app.post("/marqs", marqs.create);
  
  // Retrieve all marqs
  app.get("/marqs", marqs.findAll);
  
  // Retrieve a single marq and replies with uuid
  // app.get("/marqs/:uuid", marqs.findWithReplies);
  }