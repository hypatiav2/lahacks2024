import run from '../gemini';

export default function Upload() {
    return (
    <div className="App">
        <input
        type="file"
        
        />
        <button onClick={run}> Upload Image</button>

    </div>
    );
}
