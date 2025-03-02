
import { useState } from "react"


function App() {
const [color, setColor] = useState("olive")

  return (

   <div className="color w-full h-screen" style={{backgroundColor: color}}>

<div className="btn_container justify-center inset-x-0 flex flex-wrap fixed bottom-15 gap-4">

<button onClick={() => setColor("red")} className="bg-red-800 py-1 px-8 text-white rounded-3xl">Red</button>
<button onClick={() => setColor("orange")} className="bg-orange-800 py-1 px-8 text-white rounded-3xl">Orange</button>
<button onClick={() => setColor("blue")} className="bg-blue-800 py-1 px-8 text-white rounded-3xl">Blue</button>
<button onClick={() => setColor("green")} className="bg-green-800 py-1 px-8 text-white rounded-3xl">Green</button>
<button onClick={() => setColor("lavender")} className=" bg-blue-900 py-1 px-8 text-white rounded-3xl">Lavender</button>
</div>

   </div>
  )
}

export default App
