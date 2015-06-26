var express = require('express');
var router = express.Router();
var unirest = require('unirest')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var url = "http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + process.env.NYTIMES_KEY'"

unirest
//can store NYT key in .env file to hide it from plain view.
  .get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=c089e563b15ba06dc347af890f03e230:5:72386367')
  .end(function (response) {
    var titles = response.body.results.books.map(function (book) {
      return book.title
    });
    res.render('index', {
      url: url,
      title: 'express',
      titles: titles
    });
  })
});

module.exports = router;
