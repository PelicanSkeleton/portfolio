import React from "react";

function Contact() {
    return (
        <div className="container">
            <section className="main-section">
                <h1>Contact</h1>
                <form className="contact-form">
                    <ul>
                        <li>
                            <label className="form-name">Name</label>
                            <input type="text" id="name" name="name" placeholder="John Smith" required="required" />
                        </li>
                        <li>
                            <label className="form-email">Email</label>
                            <input type="email" id="email" name="email" placeholder="example@gmail.com" required="required" />
                        </li>
                        <li>
                            <label className="form-message">Message</label>
                            <textarea id="message" name="message" required="required" />
                        </li>
                    </ul>
                    <input type="submit" />
                </form>
            </section>
        </div>
    );
}

export default Contact;