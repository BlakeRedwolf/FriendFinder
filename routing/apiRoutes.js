var freindsData = require("../data/friends");

module.exports = function(app) {
// a GET route /api/friends this will be used to display a JSON of all possible friends
app.get('/api/friends', function(req, res) {
	res.json(friends);
});
// a POST route /api/friends this will be used to handle incoming survey results.
// will also be used to handle compatibility logic
app.post('/api/friends', function(req, res) {
	friendData.push(req.body);
});
};