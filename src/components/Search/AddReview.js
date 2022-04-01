import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { postAddReview } from "../../util/axiosConfig";
import { useParams } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';


const AddReviews = () => {
    const [isWorking, setIsworking] = useState(true)
    const [review, setReview] = useState(" ")
    const [rating, setRating] = useState(0)
    const user = useSelector((state) => state.auth.user);
    const { stationId } = useParams();
    console.log('STATION ID: ', stationId)
    
  return (
    <div className="add-reviews">
      <h2>Add review:</h2>
      <div>
        <h3>rating:</h3>
        <StarRatingComponent
          name="rating"
          starCount={5}
          value={rating}
          renderStarIcon={() => (
            <span style={{ fontSize: "1.3em", fontWeight: "bold" }}>ϟ</span>
          )}
          onStarClick={(value) => setRating(value)}
        />
      </div>
      <h3>Add a comment:</h3>
      <textarea onChange={(e) => setReview(e.target.value)} name="review" />
      <p>
        Working
        <input
          type="checkbox"
          name="isWorking"
          checked={isWorking}
          onChange={() => setIsworking(!isWorking)}
        />
      </p>
      <button
        className="add-review"
        onClick={() =>
          postAddReview({
            stationNumber: stationId,
            username: user.username,
            review,
            isWorking,
            rating,
          })
        }
      >
        Add Review
      </button>
    </div>
  );
}; 

export default AddReviews;