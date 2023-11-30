const express = require('express');
const { addReview, getAllReviews, updateReview, deleteReview } = require('../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.post('/reviews', addReview);
router.get('/reviews', getAllReviews);
router.put('/reviews/:reviewId', updateReview);
router.delete('/reviews/:reviewId', deleteReview);

module.exports = router;
