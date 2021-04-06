import React, { useState, useEffect, useRef } from 'react'
const Popup = () => {
  const [popup, setPopup] = useState(false)
  const popupRef = useRef(null)

  return (
    <div className='popup-container'>
      <button className='btn' onClick={() => setPopup(!popup)}>
        Subscribe
      </button>
      {popup && (
        <div ref={popupRef}>
          <p>Hey There</p>
        </div>
      )}
    </div>
  )
}

export default Popup
