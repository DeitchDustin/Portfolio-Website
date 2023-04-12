import './contact.css';
import contacts from './data'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p> Feel free to send an Email if you're interested in contacting me!</p>
      <div className='container contact__container'  data-aos='fade-up'>
        {
          contacts.map(contact => (
            <a key={contact.id} href={contact.link} target='_blank' rel='noopener noreferrer'>{contact.icon}</a>
          ))
        }
      </div>
      <p>DeitchDustin@gmail.com</p>
    </section>
  )
}

export default Contact;