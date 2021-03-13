const sql = require("./db.js");

// constructor
const Marq = function(marq) {
  this.author = marq.author;
  this.message = marq.message;
  this.parent = marq.parent;
};

Marq.create = (newMarq, result) => {
  sql.query("INSERT INTO marqs SET ?", newMarq, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created marq: ", { id: res.insertId, ...newMarq });
    result(null, { id: res.insertId, ...newMarq });
  });
};

Marq.findById = (uuid, result) => {
  sql.query(`SELECT * FROM marqs WHERE id = ${uuid}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found marq: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Marq with the id
    result({ kind: "not_found" }, null);
  });
};

Marq.findByAuthors = (authors, result) => {
  sql.query(`Select * FROM marqs WHERE author IN (${authors.join(', ')})`, (err, res) => {
    result(null, res);
  })
}

Marq.getAll = result => {
  sql.query("SELECT * FROM marqs", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("marqs: ", res);
    result(null, res);
  });
};

module.exports = Marq;
