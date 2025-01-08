import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Header />
      <>
      <section id="about">
    <div id="bar">
      <div className="contain">
        <div className="content">
          <h1>Welcome to Tracksuit Where Style Meets Stories</h1>
          <p>
            At tracksuit company, we're not just about tracksuits; we're about a
            lifestyle, a community, and a passion for premium activewear.
            Welcome to the place where style meets stories, and every tracksuit
            tells a unique tale.
          </p>
        </div>
      </div>
    </div>
    <div id="mission">
      <div className="contain">
        <div className="wrapper">
          <div className="content">
            <h3>Our Mission</h3>
            <p>
              Our mission at tracksuits is simple yet profound: to curate a
              marketplace where premium tracksuits find new owners and stories
              continue to unfold. We are committed to providing a platform that
              embodies quality, authenticity, and a sense of belonging.
            </p>
            <p>
              It all began with a shared love for exceptional tracksuits and a
              vision to create a platform that goes beyond buying and selling.
              tracksuit company was born out of the idea that each tracksuit has
              a story to tell, and we wanted to build a community.
            </p>
            <div className="btn_blk mt-5">
              <a href="?" className="site_btn simple stroke px">
                Shop Now
              </a>
            </div>
          </div>
          <div className="image">
            <img
              src="images/mission.jpg"
              width={800}
              height={600}
              alt="Mission Photo"
            />
          </div>
        </div>
      </div>
    </div>
    <div id="experience">
      <div className="contain">
        <div className="wrapper">
          <div className="image">
            <img
              src="images/experience.jpg"
              width={800}
              height={600}
              alt="Experience Photo"
            />
          </div>
          <div className="content">
            <h3>The Tracksuit Company Experience</h3>
            <h5>Quality First</h5>
            <p>
              We believe in the power of quality. Every tracksuit featured on
              our platform undergoes a meticulous selection process to ensure it
              meets the high standards we set. From materials to craftsmanship,
              we are dedicated to delivering excellence.
            </p>
            <h5>Community-Centric</h5>
            <p>
              Beyond the transactions, Tracksuit is about building a community.
              We cherish the connections formed between sellers and buyers, each
              contributing to the rich tapestry of our community. Join us, and
              let's create something remarkable together.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="explore">
      <div className="contain">
        <div className="wrapper">
          <div className="content text-center">
            <h2>Let's Create Tracksuit Stories Together!</h2>
            <p>
              Join us on social media for the latest updates, behind-the-scenes
              glimpses, and more!
            </p>
            <div className="btn_blk justify-content-center mt-5">
              <a href="?" className="site_btn px">
                Explore Our Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about */}
  <section id="points">
    <div className="contain">
      <div className="wrapper">
        <div className="column">
          <div className="inner">
            <div className="icon">
              <img
                src="images/package_vector.png"
                alt="Package"
              />
            </div>
            <div className="text">
              <div className="h5">Millions of unique items</div>
              <p>
                Enter your bid amount and confirm your bid. Keep an eye on the
                bidding activity to stay informed about competing offers.
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="inner">
            <div className="icon">
              <img
                src="images/curation_vector.png"
                alt="Curation"
              />
            </div>
            <div className="text">
              <div className="h5">Curated by experts</div>
              <p>
                Enter your bid amount and confirm your bid. Keep an eye on the
                bidding activity to stay informed about competing offers.
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="inner">
            <div className="icon">
              <img
                src="images/auction_vector.png"
                alt="Auction"
              />
            </div>
            <div className="text">
              <div className="h5">Bid with ease</div>
              <p>
                Enter your bid amount and confirm your bid. Keep an eye on the
                bidding activity to stay informed about competing offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* points */}
  <section id="trust" className="py-0">
    <div className="contain">
      <div className="wrapper">
        <div className="content">
          <h3>Trust and Security</h3>
          <p>
            We prioritize the security and trust of our users. Your peace of
            mind is essential to us, and we want to ensure a safe and enjoyable
            bidding experience. Here's how we guarantee your trust and security:
          </p>
          <ul className="list">
            <li>
              <img
                src="images/check_circle.svg"
                width={60}
                height={60}
                alt="Check Circle"
              />
              <div className="inr">
                <h5>Secure Transactions</h5>
                <p>
                  Your transactions are encrypted and secure, ensuring the
                  confidentiality and integrity of your financial information.
                </p>
              </div>
            </li>
            <li>
              <img
                src="images/check_circle.svg"
                width={60}
                height={60}
                alt="Check Circle"
              />
              <div className="inr">
                <h5>Trusted Payment Options</h5>
                <p>
                  Choose from a variety of trusted and secure payment options,
                  including major credit cards and PayPal.
                </p>
              </div>
            </li>
            <li>
              <img
                src="images/check_circle.svg"
                width={60}
                height={60}
                alt="Check Circle"
              />
              <div className="inr">
                <h5>Data Protection</h5>
                <p>
                  We are committed to safeguarding your data. Our robust data
                  protection measures ensure the privacy and confidentiality of
                  your personal information.
                </p>
              </div>
            </li>
          </ul>
          <div className="btn_blk mt-5">
            <a href="?" className="site_btn">
              Start Bidding Now!
            </a>
            <a href="?" className="site_btn simple stroke px">
              Read More
            </a>
          </div>
        </div>
        <div className="image">
          <img
            src="images/secure_transaction.png"
            width={800}
            height={800}
            alt="Secure Transaction"
          />
        </div>
      </div>
    </div>
  </section>
  {/* trust */}
  <section id="folio">
    <div className="contain">
      <div className="content">
        <h3>What our clients say about us</h3>
        <p>Our customers say Excellent</p>
      </div>
      <div id="slick-folio" className="slick-carousel slick-slider">
        <div className="item">
          <div className="folio_blk">
            <div className="text">
              <div className="comma">
                <img
                  src="images/comma.svg"
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
                src="images/folio_01.jpg"
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
                  src="images/comma.svg"
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
                src="images/folio_02.jpg"
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
      </div>
    </div>
  </section>
  {/* folio */}

</>

      <Footer />
    </>
  );
}
