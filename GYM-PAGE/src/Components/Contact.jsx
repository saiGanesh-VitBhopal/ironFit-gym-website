import "../Styles/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-overlay"></div>
      <h2>
        Contact <span>IronFit Elite</span>
      </h2>
      <p>Have Questions or want to join? Let's get in touch</p>
      <form className="contact-form">
        <div className="input-group">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>
        <textarea required placeholder="Your Message "></textarea>
        <button type="submit " className="contact-btn ">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
