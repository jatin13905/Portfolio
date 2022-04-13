import React from 'react'

const Contact = () => {
  return (
    <div  className='contact-div-main'>

        <div className='contact-div'>
        <div className='contact-div-child'>
        
        
            <h1>Contact Me</h1>

            <h3>You can contact for any freelancing or for work purpose and my social handles are given on buttom</h3>

            <div className='contact-div-input'>
            <input type="text" placeholder='Enter Your Name' />
            </div>
            <div className='contact-div-input'>
            <input type="email" placeholder='Enter Your Email' />
            </div>
            <div className='contact-div-input'>
            <input type="text" placeholder='Enter Your Query/Message' />
            </div>

            <div className='contact-div-submit'>
                <button type='submit'>Submit</button>
            </div>

        </div>
            
        </div>

    </div>
  )
}

export default Contact;