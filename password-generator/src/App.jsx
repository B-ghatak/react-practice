import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumberAll] = useState(false);
  const [characters, setCharAll] = useState(false);
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState('Copy');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (characters) {
      str += "!@#$%^&*()_+={}|<>?/~";
    }
    if (numbers) {
      str += "0123456789";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbers, characters]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbers, characters, passwordGenerator]);

  const copyTextClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      passwordRef.current.setSelectionRange(0, 15);
    }

    navigator.clipboard.writeText(password);
    setCopyText('Copied!');
    setTimeout(() => setCopyText('Copy'), 2000);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text" 
            value={password} 
            ref={passwordRef} 
            className="outline-none w-full py-1 px-3 bg-white" 
            placeholder='password' 
            readOnly 
          />
          <button
            onClick={copyTextClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'
          >
            {copyText}
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
              type="range" 
              min={8} 
              max={100} 
              value={length} 
              className='cursor-pointer' 
              onChange={(e) => setLength(Number(e.target.value))} 
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numbers}
              id="numberInput"
              onChange={() => setNumberAll((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={characters}
              id="characterInput"
              onChange={() => setCharAll((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;