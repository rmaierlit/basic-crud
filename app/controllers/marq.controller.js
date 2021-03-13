const Marq = require("../models/marq.model.js");

// Create and Save a new Marq
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }

    if (req.body.message.length > 140) {
      res.status(400).send({
        message: "Message too long!"
      });
    }
    
      // Create a Marq
      const marq = new Marq({
        author: req.body.author,
        message: req.body.message,
        parent: req.body.parent? req.body.parent : null
      });
    
      // Save marq in the database
      Marq.create(marq, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the marq."
          });
        else res.send(data);
      });
};
