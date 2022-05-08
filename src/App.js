import "./App.css"
import Intro from "./components/Intro"
import NavigationBar from "./components/NavigationBar"
import Luar from "./components/Luar"
import Indo from "./components/Indo"

import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro/>
      </div>

      <div className="luar">
        <Luar />
      </div>

      <div className="indo">
        <Indo />
      </div>
    </div>
  )
}

export default App
