import Gameplay from "./components/Gameplay";
import Home from "./components/Home"
import { useState } from "react"


function App() {
  const [isplay, setIsplay] = useState(true);
  const toggleplay = () => {
    setIsplay((prev) => !prev);
  };
  return (
    <>
    {
      isplay ?  <Gameplay /> : <Home toggle={toggleplay}/>
    }
      
    </>
  )
}

export default App
