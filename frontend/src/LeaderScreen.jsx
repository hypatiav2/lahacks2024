import leaderboard from './assets/leaderboard.png';
import discord from './assets/discord.png';
import linkedin from './assets/linkedin.png';
import github from './assets/github.png';
import home from './assets/home.png'
import {Link} from 'react-router-dom';
import './LeaderScreen.css';
import LeaderboardBlock from './Components/LeaderboardBlock';


export default function LeaderScreen() {
    return(
        <body>
        <div className='wholeScreen'>
            <div className='homeContainer'>
                <Link to="/home">
                    <img src={home} className='homeIcon' />
                </Link>
            </div>
            <div className='Header'>
                <img src={leaderboard} className='leaderBoardIcon' />
                <h1 className='leaderBoard'>leaderboard</h1>
            </div>
            <div className='ranking'>
                <LeaderboardBlock number='1.' name='melody' point='100 pts'/>
                <LeaderboardBlock number='2.' name='grasshopper 1' point='50 pts'/>
                <LeaderboardBlock number='3.' name='grasshopper 2' point='25 pts'/>
                <LeaderboardBlock number='4.' name='-----------' point='--'/>
                <LeaderboardBlock number='5.' name='-----------' point='--'/>
                <LeaderboardBlock number='6.' name='-----------' point='--'/>
            </div>

            <div className='bottom'>
                <p className='share'>share your grass touching adventures</p>
                <div className='icons'>
                    <img src={discord} className='discordIcon' />
                    <img src={linkedin} className='linkedinIcon' />
                    <img src={github} className='githubIcon' />
                </div>
            </div>
        </div>
        </body>
    )
}