import { useState } from 'react';


const ReviewForm = ({ lawyer }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmitReview = () => {
    // Implement review submission logic here
    console.log(`Submitting review for ${lawyer.name}: Rating - ${rating}, Review - ${review}`);
  };

  return (
    <div className="review-form-container">
      <h2 className="review-title">Leave a Review for {lawyer.name}</h2>
      <form className="review-form">
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={handleRatingChange}
            id="rating"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="review">Review:</label>
          <textarea
            id="review"
            name="review"
            rows="5"
            value={review}
            onChange={handleReviewChange}
            className="input-field"
          />
        </div>
        <button type="button" onClick={handleSubmitReview} className="submit-btn">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
