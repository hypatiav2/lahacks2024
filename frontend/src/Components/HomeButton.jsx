import { PropTypes } from 'prop-types';

export default function HomeButton(props){

  return(
    <div>
       
        <h1>{props.description}</h1>
    </div>
  )
}

HomeButton.propTypes = {
  //image: PropTypes.string.isRequired,
  description: PropTypes.func.isRequired,
};