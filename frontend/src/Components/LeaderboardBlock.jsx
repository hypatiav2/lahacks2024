import { PropTypes } from 'prop-types';
import './LeaderboardBlock.css'

export default function LeaderboardBlock(props){

    return(
        <div className='block'>
            <h1 className='number'>{props.number}</h1>
            <h1 className='name'>{props.name}</h1>
            <h1 className='point'>{props.point}</h1>
        </div>
    )
}

LeaderboardBlock.propTypes = {
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    point: PropTypes.string.isRequired
  };