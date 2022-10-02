import React from 'react'

function Contacts() {
  return (
    <div id='contact'>
      <h3>Send Me Mail</h3>
      <div className='contact-input'>
        <input type="email" placeholder='Your Email' />
        <a href="#">Contact</a>
      </div>
    </div>
  )
}

export default Contacts