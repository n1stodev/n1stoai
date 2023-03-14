import React, {useState, useEffect} from 'react'
import './STT.css'
import bars from '../../Assets/Images/bars.svg'
import { FaMicrophone } from 'react-icons/fa'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'uz-UZ'

function STT() {
  const [isListening, SetIsListening] = useState(false)
  const [note, setNote] = useState(null)
  // const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    handlelisten()
  }, [isListening])
  


  const handlelisten = () => {
    if(isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue...');
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click');
      }
    }
    mic.onStart = () => {
      console.log('Mics on');
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
          setNote(transcript)
          mic.onerror = event => {
            console.log(event.error);
          }
    }
  }


  return (
    <div className='stt'>
        <h1>Ovozni matnga o'girish</h1>
      <div className="container">
        <div className="box">
          <p>{note}</p>
          {/* <button onClick={() => SetIsListening(prevState => !prevState)}>Start/Stop <img src={bars} alt="" /></button> */}
          <button onClick={() => SetIsListening(prevState => !prevState)}>Start/Stop {isListening ? <img src={bars} alt="" /> : <FaMicrophone />}</button>
        </div>
      </div>
    </div>
  )
}

export default STT