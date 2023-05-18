import { Fragment } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import AboutLink from './components/AboutLink';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <Fragment>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </Fragment>
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
          <AboutLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
