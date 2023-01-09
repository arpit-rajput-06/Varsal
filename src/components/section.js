import React from "react";
import illustration from "../Images/illustration.png";
import group117 from "../Images/Group 117.png";
import group114 from "../Images/Group 114.png";
import dungeon from "../Images/dungeon.png";
import vector2 from "../Images/Vector-2.png";
import vector1 from "../Images/Vector-1.png";
import vector4 from "../Images/Vector-4.png";
import vector3 from "../Images/Vector-3.png";
import vector5 from "../Images/Vector-5.png";
import vector6 from "../Images/Vector-6.png";
import vector7 from "../Images/Vector-7.png";
import vector8 from "../Images/Vector-8.png";
import vector from "../Images/Vector.png";
import illustration3 from "../Images/ILLUSTRATION 03  1.png";
import group from "../Images/Group.png";
import group2 from "../Images/Group-2.png";
import group1 from "../Images/Group-1.png";
import group35 from "../Images/Group 35.png";
import group34 from "../Images/Group 34.png";
import ellipse16 from "../Images/Ellipse 16.png";
import ellipse11 from "../Images/Ellipse 11.png";
import ellipse21 from "../Images/Ellipse 21.png";
import ellipse20 from "../Images/Ellipse 20.png";
import ellipse13 from "../Images/Ellipse 13.png";
import group100 from "../Images/Group 100.png";

function Section() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Category</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <img src={group114} className="logo" />
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 mt-3">
            <div className="search">
              <i className="fa-solid fa-magnifying-glass mx-3"></i>
              <input
                type="text"
                className="text-search"
                placeholder="Search a Term | Topic"
              />
               <span> <img src={ellipse11} className="ellipse-11"/></span>
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
          <span> <img src={ellipse16} className="ellipse-1"/></span>
          <span> <img src={ellipse21} className="ellipse-21"/></span>
            <p className="quote-text mt-4">Claim a Free Quote</p>
            <p className="head-main-text">
            <span> <img src={ellipse20} className="ellipse-20"/></span>
              <span>Get Started</span> on fulfilling your Dubai or UAE dream.
            </p>
            <p className="quote-text">UAE & Offshore Company</p>
            <p className="head-text">
              We Provide with information about UAE or Offshore Company
              Registeration & help you setup your company with bank account and
              visas.
            </p>
            <div className=" button-2 mt-4 d-flex ">
              <button className="Start">Start a Company</button>
              <button className="Renew">Renew a Company</button>
            </div>
          </div>
          <div className="col-md-12 col-lg-7">
            <img src={illustration} alt="Header" className="w-100" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="Watch my-5">
          <p>
            Watch the video about UAE or Offshore Company Registration
            <span>
              <img src={group117} className="play-icon" />
            </span>
          </p>
        </div>
        <div className="text-center" style={{position:"relative"}}>
        <span> <img src={group100} className="group-100"/></span>
          <p className="section-head-text">
          <span> <img src={ellipse13} className="ellipse-13"/></span>
            <span>Dedicated</span>
            <br />
            to our mission we are
          </p>
          <p className="head-text-para mt-4">
            Our services include Company Formation & Renewels, Trust &
            Fiduciary, Tax Residency setup with Family, Bank Accounts, Remote
            Management , Stock Trading Platforms, Ownership Solutions.
          </p>
        </div>
        <div className="row my-5 justify-content-between">
          <div className=" col-md-3 text-sm-center">
            <img src={dungeon} className="card-img-top my-3" />
            <div className="card-body cards-main">
              <h5 className="card-title my-2">UAE Free Zone Company</h5>
              <p className="card-text">
                Your registration agent, will answer all of your questions and
                help you to reach a conclusion that meets your objectives of
                investing in the UAE.
              </p>
              <a href="">Get Started</a>
            </div>
          </div>
          <div className=" col-md-3 cards-main text-sm-center">
            <img src={vector2} className="card-img-top my-3" />
            <div className="card-body">
              <h5 className="card-title my-2">Dubai Local Companies</h5>
              <p className="card-text">
                The Dubai LLC formation documents are actually articles of
                organization or a certificate of organization. You can get yours
                today.
              </p>
              <a href="">Get Started</a>
            </div>
          </div>
          <div className=" col-md-3 cards-main text-sm-center">
            <img src={vector1} className="card-img-top my-3" />
            <div className="card-body">
              <h5 className="card-title my-2">Offshore Compamies</h5>
              <p className="card-text">
                You can register an offshore company and open its bank account
                in Dubai. Your agent will help you along all the process
              </p>
              <a href="">Get Started</a>
            </div>
          </div>
        </div>
        <div
          className="row container justify-content-evenly"
          style={{ marginTop: "108px" }}
        >
          <div className="col-md-5 text-sm-center">
            <p className="offshore-text">
              Learn the ways in which you can benefit from a UAE/Offshore
              Company. Then get started on fulfilling your UAE dream.
            </p>
            <p className="quote-text">Claim a Free Quote</p>
            <div class="card align-items-center" style={{ marginTop: "108px" }}>
              <img
                src={illustration3}
                alt="bank-account-setup"
                className="mt-3"
              />
              <div class="card-body setup-body">
                <h5 className="card-title mt-3 mb-4">Bank Account Setup</h5>
                <p className="setup-text">
                  There are many banks in the United Arab Emirates [UAE]. Both
                  locally owned and branches of multinational ones. Foreign
                  banks adjust according to their parent’s strategies and have
                  changed local requirements overnight in the past. But we are
                  here to help you.
                </p>
                <a href="#" className="quote-text">
                  Learn More
                  <span>
                    <img src={vector} className="px-2" />
                  </span>
                </a>
              </div>
            </div>
            <div
              class="card align-items-center d-sm-none"
              style={{ marginTop: "108px" }}
            >
              <img src={group2} alt="advice-guidance" className="mt-5" />
              <div class="card-body setup-body">
                <h5 className="card-title mt-3 mb-4">UAE Company Visas</h5>
                <p className="setup-text">
                  Your application for visas is critical especially if you
                  intend to move to Dubai. This becomes even more urgent if your
                  family will also move with you. All the paperwork is done on
                  your behalf smoothly so that you may only focus on doing what
                  matters most to you.
                </p>
                <a href="#" className="quote-text">
                  Learn More
                  <span>
                    <img src={vector} className="px-2" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div class="card align-items-center mt-5">
              <img src={group} alt="advice-guidance" className="mt-5" />
              <div class="card-body setup-body">
                <h5 className="card-title mt-3 mb-4">Advice & Guidance</h5>
                <p className="setup-text">
                  All activities in the UAE are licensed. Whether manufacturing,
                  finance, trading, marketing, consultancy or restaurants. In
                  some countries only manufacturing is licensed. In others there
                  is a threshold below which business are encouraged. Get our
                  insightfull guidance today.
                </p>
                <a href="#" className="quote-text">
                  Learn More
                  <span>
                    <img src={vector} className="px-2" />
                  </span>
                </a>
              </div>
            </div>
            <div
              class="card align-items-center d-sm-none"
              style={{ marginTop: "108px" }}
            >
              <img src={group1} alt="advice-guidance" className="mt-5" />
              <div class="card-body setup-body">
                <h5 className="card-title mt-3 mb-4">
                  Registration Document Perparation
                </h5>
                <p className="setup-text">
                  Several documents must be prepared to start the process of
                  registering a new company in the United Arab Emirates. Be it a
                  Dubai local company, a free zone one or an offshore entity.
                  Your registered agent is dedicated to get this done for you
                  for a seamless process.
                </p>
                <a href="#" className="quote-text">
                  Learn More
                  <span>
                    <img src={vector} className="px-2" />
                  </span>
                </a>
              </div>
            </div>
            <p className="offshore-text mt-5 ">
              We have gathered a team of professionals to craft adequate
              services you can rely on for a friction free setup in UAE.
            </p>
            <p className="quote-text">
              More about our services{" "}
              <span>
                <img src={vector} className="px-2" />
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="container section-3">
        <div className="text-center" style={{ marginTop: "100px" }}>
          <p className="section-head-text">
            Most <span>popular affordable pricing</span> per
            <br /> jurisdictions are brought to
            <br /> you to kick off your adventure.
          </p>
        </div>
        <div className="row mt-sm-0" style={{ marginTop: "150px" }}>
          <div className="col-md-4">
            <div className="p-5">
              <div class="card-body">
                <h5 class="card-title ajman-text">Ajman Offshore</h5>
                <h6 class="card-subtitle mb-2 mt-3 text-muted">
                  <span className="price">
                    <b>$2,997</b>&nbsp;
                  </span>
                  <span className="setup-text">One Time Payment</span>
                </h6>
                <p className="company-text my-4">
                  Ajman Offshore New Company formation includes
                </p>
                <div className="list-text">
                  <p>
                    <img src={group35} /> Attestation Charges
                  </p>
                  <p>
                    <img src={group35} /> Registered Agent
                  </p>
                  <p>
                    <img src={group35} /> Registered Office
                  </p>
                  <p>
                    <img src={group35} /> Varal Administrative
                  </p>
                  <p>
                    <img src={group35} /> Preparing Statutory File
                  </p>
                  <p>
                    <img src={group35} /> Liasing with Registration Authorities
                  </p>
                  <p>
                    <img src={group35} /> Due Diligence Appraisal
                  </p>
                  <p>
                    <img src={group35} /> Keeping The Register
                  </p>
                  <p>
                    <img src={group35} /> Seal Charges
                  </p>
                  <p>
                    <img src={group35} /> Certificate of Good Standing
                  </p>
                </div>
                <button type="submit" className="w-100 continue-btn">
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="center-card p-5">
              <div class="card-body">
                <h5 class="card-title rak-text">RAK ICC</h5>
                <h6 class="card-subtitle mb-2 mt-3">
                  <span className="price-second">
                    <b>$2,997</b>&nbsp;
                  </span>
                  <span className="payment-text">One Time Payment</span>
                </h6>
                <p className="company-text text-white my-4">
                  Rak Icc New Company formation includes
                </p>
                <div className="list-text text-white">
                  <p>
                    <i class="fa-regular fa-circle-check"></i> Attestation
                    Charges
                  </p>
                  <p>
                    <i class="fa-regular fa-circle-check"></i> Registered Agent
                  </p>
                  <p>
                    <i class="fa-regular fa-circle-check"></i> Registered Office
                  </p>
                  <p>
                    <i class="fa-regular fa-circle-check"></i> Varal
                    Administrative
                  </p>
                  <p>
                    <i class="fa-regular fa-circle-check"></i> Preparing
                    Statutory File
                  </p>
                  <p>
                    <i class="fa-regular fa-circle-check"></i> Liasing with
                    Registration Authorities
                  </p>
                  <p>
                    <i class="fa-regular fa-circle-check"></i> Due Diligence
                    Appraisal
                  </p>
                  <p>
                    <i class="fa-regular fa-circle-check"></i> Keeping The
                    Register
                  </p>
                  <p>
                    <i class="fa-regular fa-circle-check"></i> Seal Charges
                  </p>
                  <p>
                    <i class="fa-regular fa-circle-check"></i> Certificate of
                    Good Standing
                  </p>
                </div>
                <button type="submit" className="w-100 continue-center-btn">
                  Continue
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-5">
              <div class="card-body">
                <h5 class="card-title ajman-text">SHARJAH MEDIA CITY</h5>
                <h6 class="card-subtitle mb-2 mt-3 text-muted">
                  <span className="price">
                    <b>$4,124</b>&nbsp;
                  </span>
                  <span className="setup-text">One Time Payment</span>
                </h6>
                <p className="company-text my-4">
                  Sharjah Media City New Company formation include
                </p>
                <div className="list-text">
                  <p>
                    <img src={group35} /> Attestation Charges
                  </p>
                  <p>
                    <img src={group35} /> Registered Agent
                  </p>
                  <p>
                    <img src={group35} /> Registered Office
                  </p>
                  <p>
                    <img src={group35} /> Varal Administrative
                  </p>
                  <p>
                    <img src={group35} /> Preparing Statutory File
                  </p>
                  <p>
                    <img src={group35} /> Liasing with Registration Authorities
                  </p>
                  <p>
                    <img src={group35} /> Due Diligence Appraisal
                  </p>
                  <p>
                    <img src={group35} /> Keeping The Register
                  </p>
                  <p>
                    <img src={group35} /> Seal Charges
                  </p>
                  <p>
                    <img src={group35} /> Certificate of Good Standing
                  </p>
                </div>
                <button type="submit" className="w-100 continue-btn">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-between"
          style={{ marginTop: "150px" }}
        >
          <div className="col-md-4">
            <div className="blog-head">
              <p>Read about our blogs for more information on our processes</p>
            </div>
            <div className="d-flex mt-5">
              <img src={vector4} className="wifi-img" />
              <div>
                <p className="wifi-text px-4">
                  How to start a company formation in Dubai
                </p>
                <p className="quote-text py-0 my-0 px-4">5 minutes</p>
              </div>
            </div>
            <div className="d-flex mt-5">
              <img src={vector4} className="wifi-img" />
              <div>
                <p className="wifi-text px-4">
                  How to start an Offshore company formation in Dubai
                </p>
                <p className="quote-text py-0 my-0 px-4">5 minutes</p>
              </div>
            </div>
            <div className="d-flex mt-5">
              <img src={vector4} className="wifi-img" />
              <div>
                <p className="wifi-text px-4">
                  SEO Dubai: Who benefits the most?
                </p>
                <p className="quote-text py-0 my-0 px-4">5 minutes</p>
              </div>
            </div>
            <div className="blog-head mt-5">
              <p>Satisfied We are When Our Customers Are Happy</p>
            </div>
            <div className="d-flex mt-5">
              <div>
                <img src={vector3} className="user-img" />
              </div>
              <div>
                <p className="user-text px-4">
                  "I am very happy with them. I’ll continue to use their
                  services in future & highly recommend them to anyone,"
                </p>
                <p className="user-sub-text  px-4">Muhib Abrar</p>
              </div>
            </div>
            <div className="d-flex mt-5">
              <div>
                <img src={vector3} className="user-img" />
              </div>
              <div>
                <p className="user-text px-4">
                  "Rama has a high level of integrity, intellect, knowledge of
                  his business, resourcefulness and humanity,"
                </p>
                <p className="user-sub-text  px-4">Colin Saldahna</p>
              </div>
            </div>
            <div className="d-flex mt-5">
              <div>
                <img src={vector3} className="user-img" />
              </div>
              <div>
                <p className="user-text px-4">
                  "Your advise was so complete that I actually realized how
                  beneficial this would be to my clients and my business."
                </p>
                <p className="user-sub-text  px-4">Mark Swann</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="blog-head">
              <p>Get to know the whole us and more of our services</p>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-6">
                <div className="services mt-4" style={{ marginLeft: "30px" }}>
                  <p>Services</p>
                  <ul>
                    <li>Product</li>
                    <li>Solutions</li>
                    <li>Assurance</li>
                    <li>FAQ</li>
                    <li>Working at Varal Singhania</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-sm-6">
                <div className="services mt-4" style={{ marginLeft: "30px" }}>
                  <p>Policies</p>
                  <ul>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-sm-6">
                <div className="services mt-4" style={{ marginLeft: "30px" }}>
                  <p>About</p>
                  <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-sm-6">
                <div className="services mt-4" style={{ marginLeft: "30px" }}>
              <p>Address</p>
              <ul>
                <li>
                  608 One Lake Plaza, Cluster T, Al Sarayat Street, Jumeirah
                  <br /> Lake Towers
                  <br /> Dubai
                  <br /> United Arab Emirates
                </li>
                <li className="mt-5 d-sm-none">
                  Office Hours: Sunday to
                  <br /> Thursday 8:30 AM to 6:30 PM
                  <br /> [GMT+4]
                  <br /> M: +971 55 794 2016
                  <br /> O: +971 4 447 2061
                </li>
              </ul>
              </div>
              </div>
              <div className="col-md-12 col-sm-6">
                <div className="services mt-4" style={{ marginLeft: "30px" }}>
              <p>Subscribe Now</p>
              <ul>
                <li>
                  Subscribe now to receive our Newsletters about amazing
                  opportunities in Dubai
                </li>
              </ul>
              <button type="submit" class="p-0 email-btn d-sm-flex mt-3">
                <input
                  type="email"
                  className="email-input mt-sm-2"
                  placeholder="Enter email address"
                />
                <span>
                  <img class="download-img" src={group34} alt="" />
                </span>
              </button>
              </div>
              </div>
              <div className="col-md-12 col-sm-6">
              <div className="d-flex mt-4">
                <img src={vector5} />
                <img src={vector6} className="px-5" />
                <img src={vector7} />
                <img src={vector8} className="px-5" />
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 copy-text">
          <p>Varaluae 2021 &copy; All Right Reserved</p>
        </div>
      </div>
   </div>
  );
}

export default Section;
