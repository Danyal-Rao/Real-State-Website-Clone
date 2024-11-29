import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth  c-container">
        {/* left side  */}
        <div className="c-left flexColStart">
          <span className="orangeText">Our Contact us</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </span>

          <div className="flexColStart contactModes">
            {/* first row  */}
            <div className="flexStart row boxes">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">021 432 232 32</span>
                  </div>
                </div>

                <div className="flexCenter button">Call Now</div>
              </div>

              {/* Seccond mode  */}

              <div className="flexColCenter mode ">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">021 432 232 32</span>
                  </div>
                </div>

                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>

            {/* Seccond Row  */}

            <div className="flexStart row boxes">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Vedio Call</span>
                    <span className="secondaryText">021 432 232 32</span>
                  </div>
                </div>

                <div className="flexCenter button">Vedio Call Now</div>
              </div>

              {/* Seccond mode  */}

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>

                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">021 432 232 32</span>
                  </div>
                </div>

                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="c-right">
          <div className="image-container">
            <img src="./r3.png" alt="container-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
