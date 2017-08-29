var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.locals.connection.query('SELECT * from users', (error, results) => {
    if (error) {
      res.send(JSON.stringify({
        'status': 500,
        'error': error,
        'response': null
      }));

      throw error;
    }
    else {
      res.send(JSON.stringify({
        'status': 200,
        'error': null,
        'response': results
      }));
    }
  });
});

module.exports = router;
