module.exports = function(app, db) {
  app.post('/event', function(req, res) {
    console.log(req.body);
    res.send('Post request is OK!');
  });
  app.get('/event/:event_id', (req, res) => {
    console.log('get request');
    res.send('Get request is OK!');
});
  app.get('/event/:user_id', (req, res) => {
    console.log('get request');
    res.send('Get request is OK!');
  });
};
