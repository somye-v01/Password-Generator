import { useCallback, useState, useEffect } from 'react';
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numAllow, setnumAllow] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [pass, setpass] = useState("")

  const passgenerator = (length, numAllow, charAllowed, setpass) => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllow){
      str += "1234567890"
    }
    if(charAllowed){
      str += "!@#$%^&*()-+-={}[];<>"
    }
    let pass = "";
    for(let i = 0; i < length; i++){
      pass += str[Math.floor(Math.random() * str.length )];
    }
    setpass = pass;
  }

  const copyToClip = useCallback(() => {
    window.navigator.clipboard.writeText(pass)
  }, [pass]);

  useEffect(() => {
    passgenerator(length, numAllow, charAllowed)
  }, [length, numAllow, charAllowed, passgenerator])
 

  return (
    <>
      <h1 className='text-3xl text-center'>Password Generator </h1>
      <div className="flex justify-center items-center bg-slate-200">
        <div className="border-2 border-cyan-500 w-2/4 h-fit rounded-lg my-10 flex gap-10">
          
          <input type = "text" value = {pass} className="outline-none w-full py-1 px-3" placeholder="Password" readOnly/>
          {/* Content for the first inner div */}
     
          <button className="outline-none bg-blue-700 text-white px-16 py-1 shrink-0" onClick={copyToClip}>
          Copy
          </button>
        </div>
        <div>
          <input type = "range" className="" min={8} max={20} value={length} onChange={(e) => {
            setlength(e.target.value);
          }}/>
        </div>
        <label>Length: {length}</label>
      </div> 
    </>
  );
  }
export default App;
