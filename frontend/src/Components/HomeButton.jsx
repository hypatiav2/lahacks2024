import { PropTypes } from 'prop-types';
import './HomeButton.css';

export default function HomeButton(props){

  return(
    <div>
        <h1 className = 'description'>{props.description}</h1>
    </div>
  )
}

HomeButton.propTypes = {
  //image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};