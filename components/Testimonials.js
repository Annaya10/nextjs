import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Testimonials = () => {
    var testimonials = {
        dots: false,
            arrows: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
      };
  return (
    <>
   <section id="folio">
    <div className="contain">
      <div className="content">
        <h3>What our clients say about us</h3>
        <p>Our customers say Excellent</p>
      </div>
      
      <Slider {...testimonials}>
        <div className="item">
          <div className="folio_blk">
            <div className="text">
              <div className="comma">
                <img
                  src="/images/comma.svg"
                  width={100}
                  height={100}
                  alt="Comma Icon"
                />
              </div>
              <p>
                “I've never experienced such an exciting way to get my hands on
                premium tracksuits! The bidding process was seamless, and the
                quality of the tracksuit I won exceeded my expectations.
                Definitely my go-to for athletic wear now!”
              </p>
            </div>
            <div className="image">
              <img
                src="/images/folio_01.jpg"
                width={800}
                height={600}
                alt="Folio Photo"
              />
              <div className="btm">
                <div className="name">Albert Flores</div>
                <div className="desg">Product Manager at Jomanar</div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="folio_blk">
            <div className="text">
              <div className="comma">
                <img
                  src="/images/comma.svg"
                  width={100}
                  height={100}
                  alt="Comma Icon"
                />
              </div>
              <p>
                “I've never experienced such an exciting way to get my hands on
                premium tracksuits! The bidding process was seamless, and the
                quality of the tracksuit I won exceeded my expectations.
                Definitely my go-to for athletic wear now!”
              </p>
            </div>
            <div className="image">
              <img
                src="/images/folio_02.jpg"
                width={800}
                height={600}
                alt="Folio Photo"
              />
              <div className="btm">
                <div className="name">Jennifer Kem</div>
                <div className="desg">Product Manager at Jomanar</div>
              </div>
            </div>
          </div>
        </div>

        </Slider>
      
    </div>
  </section>
  {/* folio */}

</>

  );
};

export default Testimonials;
