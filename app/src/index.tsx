import * as React from "react"
import { render } from "react-dom"
import { Frame, transform, useCycle } from "framer"

import "./styles.css"

function Fab({ buttons, ...props }) {
  const [mode, cycleMode] = useCycle("folded", "expanded")
  return (
    <Frame
      background={null}
      size="auto"
      animate={mode}
      initial="folded"
      {...props}
    >
      <Frame
        background={null}
        size="auto"
        center="x"
        position="relative"
        variants={{
          folded: {
            transition: { staggerChildren: 0.05 }
          },
          expanded: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
          }
        }}
      >
        {buttons.map(button => (
          <Frame
            size={40}
            borderRadius="50%"
            image={button.image}
            key={button.image}
            position="relative"
            center="x"
            border="2px solid white"
            shadow="1px 1px 5px rgba(0,0,0,0.5)"
            style={{ marginBottom: 16 }}
            variants={{
              folded: { scale: 0 },
              expanded: { scale: 1 }
            }}
          />
        ))}
      </Frame>

      {/* FAB */}
      <Frame
        position="relative"
        size={60}
        borderRadius="50%"
        backgroundColor="white"
        shadow="1px 1px 5px rgba(0,0,0,0.5)"
        onTap={function() {
          cycleMode()
        }}
      >
        <Frame
          size={30}
          background={null}
          variants={{
            folded: { image: "/share.svg", rotate: 0, x: -2, y: 1 },
            expanded: { image: "/x.svg", rotate: 180, x: 0, y: 0 }
          }}
          center
        />
      </Frame>
    </Frame>
  )
}

function App() {
  const buttons = [
    {
      image:
        "https://tinyfac.es/data/avatars/A7299C8E-CEFC-47D9-939A-3C8CA0EA4D13-200w.jpeg"
    },
    {
      image:
        "https://tinyfac.es/data/avatars/AEF44435-B547-4B84-A2AE-887DFAEE6DDF-200w.jpeg"
    },
    {
      image:
        "https://tinyfac.es/data/avatars/2DDDE973-40EC-4004-ABC0-73FD4CD6D042-200w.jpeg"
    },
    {
      image:
        "https://tinyfac.es/data/avatars/852EC6E1-347C-4187-9D42-DF264CCF17BF-200w.jpeg"
    }
  ]
  return <Fab buttons={buttons} center />
}

const rootElement = document.getElementById("root")
render(<App />, rootElement)
