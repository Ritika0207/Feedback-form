import { createContext, useState } from 'react';
//import FeedbackData from '../data/Feedbackdata';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 1,
      text: 'This is Feedback Item 1',
    },
    {
      id: 2,
      rating: 2,
      text: 'This is Feedback Item 2',
    },
    {
      id: 3,
      rating: 3,
      text: 'This is Feedback Item 3',
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  //Delete a feedback
  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  //Add a feedback
  const addFeedback = (newFeedbackObject) => {
    newFeedbackObject.id = uuidv4(); // adding a unique id with uuidv4
    setFeedback([newFeedbackObject, ...feedback]);
  };

  // change already present feedback to edit mode
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // update the feedback that is already in Edit mode
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback, //shorthand for writing feedback(created): feedback(state)
        feedbackEdit, //passing to form so useEffect can work on it
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
