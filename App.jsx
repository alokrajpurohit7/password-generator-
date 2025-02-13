import { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+={}[]/.?~'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
    setCopied(false);
  }, [length, numberAllowed, charAllowed]);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1e3c72] to-[#2a5298]">
      <div className="w-full max-w-xl bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-white/30">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          🔐 Secure Password Generator
        </h1>

        <div className="flex items-center bg-white/30 backdrop-blur-md rounded-xl shadow-inner overflow-hidden">
          <input
            type="text"
            value={password}
            className="w-full py-3 px-4 bg-transparent text-lg text-white placeholder-gray-200 focus:outline-none"
            placeholder="Generated password"
            readOnly
          />
          <button
            onClick={handleCopy}
            className={`px-5 py-3 text-white font-medium transition-all duration-300 ${
              copied ? 'bg-green-500' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {copied ? '✅ Copied' : '📋 Copy'}
          </button>
        </div>

        <button
          onClick={passwordGenerator}
          className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-xl text-white text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          🔄 Generate Password
        </button>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-lg text-white">Password Length: {length}</label>
            <input
              type="range"
              min="6"
              max="24"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-1/2 accent-pink-500"
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
              className="accent-pink-500 w-5 h-5"
            />
            <label className="text-lg text-white">Include Numbers</label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
              className="accent-pink-500 w-5 h-5"
            />
            <label className="text-lg text-white">Include Special Characters</label>
          </div>
        </div>

        <p className="text-center text-gray-300 mt-6">
          Designed ❤️ by Alok Rajpurohit
        </p>
      </div>
    </div>
  );
}

export default App;


/*3import { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(12);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+={}[]/.?~'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="w-full max-w-lg bg-gray-700 rounded-3xl shadow-lg p-8 text-white">
        <h1 className="text-4xl font-extrabold text-center text-gradient mb-6">
          🔒 Password Generator
        </h1>

        <div className="flex items-center mb-6 bg-gray-800 rounded-xl overflow-hidden shadow-inner">
          <input
            type="text"
            value={password}
            className="w-full py-3 px-4 bg-transparent text-lg focus:outline-none placeholder-gray-400"
            placeholder="Your secure password"
            readOnly
          />
          <button
            onClick={() => navigator.clipboard.writeText(password)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 transition-all duration-300"
          >
            📋 Copy
          </button>
        </div>

        <button
          onClick={passwordGenerator}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-xl text-white text-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
        >
          🔄 Generate Password
        </button>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-lg">Password Length: {length}</label>
            <input
              type="range"
              min="6"
              max="24"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-1/2 accent-purple-500"
            />
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
              className="accent-purple-500 w-5 h-5"
            />
            <label className="text-lg">Include Numbers</label>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
              className="accent-purple-500 w-5 h-5"
            />
            <label className="text-lg">Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;*/

/*2import { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+={}[]/.?~'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black text-white flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
          Password Generator
        </h1>

        <div className="mb-6">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full py-2 px-4 rounded-lg bg-gray-800 text-gray-300 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Generated password will appear here"
          />
          <button
            onClick={passwordGenerator}
            className="mt-4 w-full py-2 px-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-lg shadow-lg transition duration-300"
          >
            Generate Password
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Password Length</label>
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full accent-teal-500"
            />
            <p className="text-sm text-gray-400 mt-1">Length: {length}</p>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="accent-teal-500"
              />
              <span>Include Numbers</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="accent-teal-500"
              />
              <span>Include Special Characters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;*/

/*1mport { useState, useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*_-+={}[]/.?~'";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <h1 className='text-4xl my-3 text-center text-white'>Password Generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 my-10 text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3'
            placeholder='Generated password'
            readOnly
          />
          <button
            onClick={passwordGenerator}
            className='bg-blue-500 text-white px-5 py-3 hover:bg-blue-600'
          >
            Generate
          </button>
        </div>

        <div className='flex items-center gap-x-8 mb-4'>
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label className='text-white'>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-8 mb-4'>
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed(prev => !prev)}
          />
          <label className='text-white'>Include Numbers</label>
        </div>

        <div className='flex items-center gap-x-3'>
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed(prev => !prev)}
          />
          <label className='text-white'>Include Special Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;*/
