import React from "react";
import "../css/Contact.css";

const Contact = () => {
  return (
    <section className="Contact_comp" id="Contact">
      <div className="contact_heading">
        <h1>What's Next</h1>
      </div>
      <div className="contact_content">
        <h1 className="contact_head_2">Get In Touch</h1>
        <p className="contact_desc">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <a href="mailto:nayan.agarwal.2022@gmail.com">
          <button className="Contact_btn">Say Hello</button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
