import './Contact.css'
import Swal from 'sweetalert2'
export default function Contact() {
  function SubmitEvent(e) {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Your Message has been sent successfully',
      showConfirmButton: false,
      timer: 2000
    })
  }
  return (
    <div className="Contact">
      <h1>Contact <span>Me</span></h1>
      
      <form className='Form' action='#'>
        <div className="input-group">
          <input type="text" placeholder='Full-name' className='name'/>
          <input type="email" placeholder='Email' className='Email' />
          <input type="text" placeholder='Subject' className='subject' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' className='message'></textarea>
          <button className='sub-btn' value='Submit' onClick={(e) => {SubmitEvent(e)}}>Submit</button>
        </div>
      </form>
    </div>
  ) 
}
