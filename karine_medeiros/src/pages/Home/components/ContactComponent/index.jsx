import React from "react";
import "./styles.css";

/**
 * Images
 */
import contactImage from "./images/contact-image.png";
import wppIcon from "./images/whatsapp.png";
import instagramIcon from "./images/instagram.png";
import gmailIcon from "./images/gmail.png";
import youtubeIcon from "./images/youtube.png";

function ContactComponent() {
  return (
    <div className="contact-component" id="contato">
      <div className="contact-title">
        <h1>Contato</h1>
      </div>

      <div className="contact-container-main">
        <div className="contact-image">
          <img src={contactImage} alt="contactImage" />
        </div>

        <div className="contact-info">
          <h2>Contratar Karine Medeiros pode ser mais fácil do que você imagina!</h2>

          <div className="contact-icons">
            <a href="https://wa.me/5561998767129?text=Ol%C3%A1%2C+tenho+interesse+em+contratar+a+cantora+Karine+Medeiros%21" target="_blank" rel="noreferrer">
              <img src={wppIcon} alt="wppIcon" />
            </a>

            <a href="https://www.instagram.com/karinemedeiroscantora/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noreferrer">
              <img src={instagramIcon} alt="instagramIcon" />
            </a>

            <a href="mailto:karinemedeiroscantora@gmail.com">
              <img src={gmailIcon} alt="gmailIcon" />
            </a>

            <a href="https://www.youtube.com/@karinemedeiroscantora" target="_blank" rel="noreferrer">
              <img src={youtubeIcon} alt="youtubeIcon" />
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactComponent;