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
      <h1>QuizzHub</h1>
      <h2>Question</h2>
      <div>
        {buttonLabels.map((label, index) => (
          <Button key={index} label={label} handler={checkAnswer} />
        ))}
      </div>
    </>
  )
}

export default App
