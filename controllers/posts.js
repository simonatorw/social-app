const mongoose = require('mongoose');
const router = require('express').Router();

mongoose.connect('mongodb://localhost/duh', () => {
	console.log('mongodb connected');
});

const Post = mongoose.model('Post', {
	username: { type: String, required: true },
	body: { type: String, required: true },
	date: { type: Date, required: true, default: Date.now }
});

router.get('/posts', (req, res, next) => {
	Post.find()
		.sort('-username')
		.exec((err, posts) => {
			if (err) return next(err);
			res.json(posts);
		});
});

router.post('/posts', (req, res, next) => {
	const post = new Post({
		username: req.body.username,
		body: req.body.body
	});
	
	post.save((err, post) => {
		if (err) return next(err);
		res.json(post);
	});
});

module.exports = router;