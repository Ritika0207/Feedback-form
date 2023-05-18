import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [rating, setRating] = useState();
  const [disabled, setDisabled] = useState(true);
  const [message, setmessage] = useState('');
  const [buttonName, SetButtonName] = useState('Send');

  useEffect(() => {
    //updating the form when we click the icon. we are using useEffect because we want it to happen naturaly as feedbackEdit changes from the onlcick editfeedback has
    if (feedbackEdit.edit === true) {
      SetButtonName('Update');
      setDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    const { value } = e.target;
    if (value === '' && rating) {
      setDisabled(true);
      setmessage(null);
    } else if (value && value.trim().length < 10) {
      setDisabled(true);
      setmessage('Text must be at least 10 charaters');
    } else {
      setDisabled(false);
      setmessage(null);
    }
    setText(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length >= 10) {
      //if this, make a new object called newFeedback
      const newFeedback = {
        text,
        rating,
      };
      // this means we are creating a newFeedback object with text keyyand text(from state) property  same as rating key and rating(from state) property. This is a shortHand version of creating Objects without having to type key and property.

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText('');
      feedbackEdit.edit = false;
      SetButtonName('Send');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={disabled}>
            {buttonName}
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
