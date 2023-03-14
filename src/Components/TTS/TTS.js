import React, {useState} from 'react'
import './TTS.css'
import { useSpeechSynthesis } from 'react-speech-kit'

function TTS() {
  const [text,setText] = useState('Uzbek');
  const {speak} = useSpeechSynthesis()

  const handleOnClick = () => {
    speak({text:text})
  }

  return (
    <div className='tts'>
        <h1>Matnni ovozga o'girish</h1>
        <textarea className='tts__textarea' onChange={(e) => {setText(e.target.value)}}></textarea>
        <button className="convert__btn" onClick={() => {handleOnClick()}}>Ovozga O'girish</button>
    </div>
  )
}

export default TTS