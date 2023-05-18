import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Card>
      <div className='about'>
        <h1>About this Project</h1>
        <p>This is a react app to leave Feedbacks for a product</p>
        <p>Version 1.0.0 Phileze®</p>
        <p>
          <Link className='links' style={{ color: 'steelblue' }} to='/'>
            Go back Home
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
