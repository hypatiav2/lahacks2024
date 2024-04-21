import Upload from './Components/PhotoUpload'
import './ChallengeScreen.css'
import ChallengeIcon from './assets/challengeicon.png'
import home from './assets/home.png'

export default function ChallengeScreen(){
  return(
    <div className="alignScreen">
      <div className="homeContainer">
        {/* <Link to="/home"> */}
          <img src={home} className='homeIcon' />
        {/* </Link> */}
      </div>
      <div className="headline">
        <img src={ChallengeIcon} alt="Image" className='challengeIcon' />
        <h1 className="title">challenge:</h1>
      </div>
      <Upload />
    </div>
  )
}