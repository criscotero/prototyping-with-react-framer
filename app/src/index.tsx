import * as React from "react"
import ReactDOM from "react-dom"
import { Frame, useMotionValue } from "framer"

import "./styles.css"

const style = {
  backgroundImage:
    "url(https://cdn.glitch.com/071e5391-90f7-476b-b96c-1f51f7106b0c%2Fbird_strong_small.svg?v=1560032432704)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundColor: "#55CCFF",
  boxShadow: "2px 2px 10px 0 rgba(0,0,0,0.25)",
  borderRadius: 10,
  height: 300
}

function App() {
  let mv = useMotionValue(0)

  return (
    <div className="App">
      <Frame
        center
        drag="x"
        x={mv}
        y={mv}
        dragConstraints={{ left: -200, right: 200 }}
        style={style}
      />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
