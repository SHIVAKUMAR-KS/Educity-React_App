import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send  us a  Messaage <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through  form or find out contact information
                below.Your feedback,question,and seggestion are  important
                to us as we strive to provide exceptinal service to our 
                universityy  community. </p>
                <ul>
                    <li><img src={mail_icon
                    } alt="" />Contact@shivakumar.dev</li>
                    <li><img src={phone_icon} alt="" />9843284725</li>
                    <li><img src={location_icon} alt="" />MIT ,United state</li>
                </ul>
        </div>
        <div className="contact-col"></div>

      
    </div>
  )
}
import './Contact.css'

export default Contact
