var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var project_id = process.env.PROJECT_ID;

/* GET home page. */
router.get('/', function(req, res, next) {

unirest
  .get('https://www.pivotaltracker.com/services/v5/projects/1374616/stories')
  .headers('X-TrackerToken', process.env.PIVOTAL_TRACKER)
  .end(function (response) {
    res.render('index', {
      title: 'To-Do List',
      response: response.body });
  });
});

router.post('/', function(req, res, next) {
  unirest
    .post('https://www.pivotaltracker.com/services/v5/projects/1374616/stories')
    .headers('X-TrackerToken', process.env.PIVOTAL_TRACKER)
    .headers("Content-Type", "application/json")
    .send({"name": req.body.new})
    .end(function(response) {
      res.redirect('/');
  });
});

module.exports = router;
