import './Contact.css'

export default function Contact() {
  return (
    <div className="Contact">
      <h1>Contact <span>Me</span></h1>
      
      <form className='Form' action='#'>
        <div className="input-group">
          <input type="text" placeholder='Full-name' className='name'/>
          <input type="email" placeholder='Email' className='Email' />
        </div>
        <div className="textarea">
          <input type="text" placeholder='Subject' className='subject' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' className='message'></textarea>
          <button className='sub-btn' value='Submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}
