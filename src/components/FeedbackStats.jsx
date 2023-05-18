import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  // we are getting this feedback data Globally from context. no longer as a prop.
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;
  // the second argument (0) for reduce is the default value of acc; acc=0

  //making sure average only has one decimal place, then .replace() takes off trailing 0's
  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
  //means if average is NaN ? then display 0, else display average
}

export default FeedbackStats;
