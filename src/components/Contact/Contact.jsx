import React from 'react'
import './Contact.css'

import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4eaa7b0e-cc5c-4695-9274-79b54a4075cb");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      event.target
      .reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };




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
                    } alt="" />Contact@shivakumar@gmail.com</li>
                    <li><img src={phone_icon} alt="" />9155563895</li>
                    <li><img src={location_icon} alt="" />Student at Cmr Technical Campus</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />

                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobil number' required/>

                <label >Write Your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>

            <span>{result}</span>

        </div>

      
    </div>
  )
}


export default Contact
