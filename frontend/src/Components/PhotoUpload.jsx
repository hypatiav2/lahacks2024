import CheckPhoto from './geminiUpload';
import getChallenge from '../gemini';


export default function Upload() {
    const prompt = run();
    return (
    <div className="App">
        <input
        type="file"
        
        />
        <button onClick={async () => CheckPhoto(prompt)}> Upload Image</button>

    </div>
    );
}

async function run() {
    console.log("fetching challenge");
    let prompt = await getChallenge();
    console.log(prompt);
    return prompt;
}
