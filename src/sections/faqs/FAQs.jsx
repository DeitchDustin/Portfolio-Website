import './faqs.css';
import faqs from './data';
import FAQ from './FAQ';

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Below are some frequently asked questions with their respective answers. Click to reveal each response. If you have any additional inquiries, feel free to reach out to me via the contact section!
      </p>
        <div className='container faqs__container'>
          {
            faqs.map(faq => (
              <FAQ key={faq.id} faq={faq}/>
            ))
          }
        </div>
    </section>
  )
}

export default FAQs;