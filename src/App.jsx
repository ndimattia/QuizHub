import { useState } from 'react'
import './App.css'
import Button from './Button'

function App() {

  const buttonLabels = ["Alpha", "Bravo", "Charlie"]

  const [smiley, setSmiley] = useState("thinking")

  const checkAnswer = (event) => {
    const clickedLabel = event.target.innerHTML

    if(clickedLabel === "Alpha") {
      setSmiley("happy")
    } else {
      setSmiley("sad")
    }

    console.log(clickedLabel)
  }

  return (
    <>
      <h1>Quiz Hub</h1>
      <h2>Question</h2>
      <div>
        <img src={
          smiley === "happy" 
          ? "/img/smile.png"
          : smiley === "sad" 
          ? "/img/sad.png"
          : "/img/thinking.png"
        }
        alt="Smiley" />
      </div>
      <div>
        {buttonLabels.map((label, index) => (
          <Button key={index} label={label} handler={checkAnswer} />
        ))}
      </div>
    </>
  )
}

export default App
