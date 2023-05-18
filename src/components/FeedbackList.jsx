import FeebackItem from './FeebackItem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <h2> No FeedbackList Available </h2>;
  } else {
    //Adding animation to the addition and deletion
    return (
      <div className='feedback-list'>
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeebackItem key={item.id} item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );

    //Non Animated Version
    // return (
    //   <div className='feedback-list'>
    //     {feedback.map((item) => (
    //       <FeebackItem key={item.id} item={item} handleDelete={handleDelete} />
    //     ))}
    //   </div>
    // );
  }
}

export default FeedbackList;
