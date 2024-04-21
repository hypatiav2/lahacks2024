import CheckPhoto from './geminiUpload';
import getChallenge from '../gemini';
import { useState } from 'react';
import './PhotoUpload.css';


export default function Upload() {
    const [challenge, setChallenge] = useState('');
    const [content, setContent] = useState('');

    function handleFileInputChange(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
      
        reader.onload = function(e) {
          const imageDiv = document.querySelector('.image');
          imageDiv.innerHTML = ''; // Clear previous content
          const img = document.createElement('img');
          img.src = e.target.result;
          img.alt = 'Uploaded Image';
          imageDiv.appendChild(img);
        };
      
        if (file) {
          reader.readAsDataURL(file);
        }
      }
    
    return (
        <div className="app">
            <h1 className="challengeText">{challenge}</h1>
            <button className="getChallenge" onClick={async () => getPrompt(setChallenge)}>get challenge!</button>
            <div className="imageAlign">
             <div className="image"></div>
            </div>
            <div className="centerInput">
                <input id="fileInput" type="file" style={{ display: 'none' }} onChange={handleFileInputChange}/>
                <button className="chooseFileButton" onClick={() => document.getElementById('fileInput').click()}>choose file</button>
                <button className="uploadButton" onClick={async () => CheckPhoto(challenge, setContent)}> submit </button>
            </div>
            
            <h1 className="checkChallenge">{content}</h1>
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
