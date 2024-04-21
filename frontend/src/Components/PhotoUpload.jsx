import CheckPhoto from './geminiUpload';
import getChallenge from '../gemini';
import { useState } from 'react';


export default function Upload() {
    const [challenge, setChallenge] = useState('--');
    const [content, setContent] = useState('..');
    
    return (
        <div className="App">
             {challenge}
            <button onClick={async () => getPrompt(setChallenge)}> Get Challenge</button>
            <input
                type="file"

            />
            <button onClick={async () => CheckPhoto(challenge, setContent)}> Upload Image</button>
            {content}
        </div>
    );
}

async function getPrompt(setChallenge) {
    console.log("fetching challenge");
    let prompt = await getChallenge();
    console.log(prompt);
    setChallenge(prompt);
    return prompt;
}
