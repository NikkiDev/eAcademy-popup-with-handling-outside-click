import React, { useState, useEffect, useRef } from 'react'
import './some.scss'
const Popup = () => {
  const [popup, setPopup] = useState(false)
  const popupRef = useRef()

  useEffect(() => {
    let clickHandler = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        if (popup) setPopup(false)
      }
    }
    document.addEventListener('click', clickHandler)
    return () => {
      document.removeEventListener('click', clickHandler)
    }
  })

  return (
    <div className='container'>
      <div className={`${popup ? 'background' : ''}`}></div>
      <div className={`popup-container ${popup ? 'none' : ''}`}>
        <div className='prePopup'>
          <div className='agency'>
            <h1>your travel agency</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              neque ad aperiam. Consectetur, odio a.
            </p>
          </div>
          <h1>
            get <strong className='sale'>25%</strong> off
          </h1>
          <h3>for your next trip</h3>
          <button className='btn' onClick={() => setPopup(!popup)}>
            Subscribe
          </button>
        </div>
        {popup && (
          <div className='popup' ref={popupRef}>
            <div className='close' onClick={() => setPopup(!popup)}>
              Close
            </div>
            <h1>make your vacation unforgetable with us</h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              a alias, numquam eos quis aliquid id fugiat assumenda
              exercitationem facilis?
            </h2>
            <div className='input-container'>
              <input type='email' placeholder='Enter your e-mail' />
              <button type='button'>sumbit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Popup
