import React from "react";
import "./OurStory.css";
import { NavMenu } from "../components/NavMenu";
import Banner from "../components/Banner/Banner";

function OurStory() {
  return (
    <>
      <NavMenu />
      <section className="d-flex home-header">
        <div className="header-content d-flex justify-content-center align-items-center col-6">
          <div className="content">
            <h1 className="headingStory">
              Our <br></br>Story
            </h1>
            <hr className="hrStory col-9"></hr>
            <p className="contentStory">
              Welcome to Hotel Lake and City View Kandy, where dreams and passion converge to create a unique hospitality experience. Our journey began with a shared vision to create a hotel that goes beyond the ordinary, offering a fresh perspective on hospitality and a warm, personalized touch for every guest.
              <br /><br />We embrace the spirit of innovation, creativity, and entrepreneurial drive. We believe in challenging the status quo and redefining the way guests experience hospitality. Our aim is to provide a dynamic and memorable stay that reflects the energy and enthusiasm of our team.
            </p>
          </div>
        </div>
        <div className="storyImage col-6">
          <div className="bg-overlay-si d-flex justify-content-end">
            <button className='mt-3 mx-5 px-5 py-2 btn-book-now'>Book Now</button>
          </div>
        </div>
      </section>
      <section className="serivce">
          <div className="service-header">
              <h1 className="mt-5 mb-5 service-title">Our Service</h1>
          </div>
          <div className="d-flex home-header service-content justify-content-around col-12">
              <div className="col-5">
                <div className="service-stay-in col-12">
                  <div className="bg-overlay"></div>
                </div>
                  <h2 className="mt-5 mb-3">Stay-In</h2>
                  <p className="serviceStory">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tempus lacus, ut convallis turpis. Sed eget odio sed erat viverra auctor a quis dolor. Integer at volutpat felis, et volutpat neque. Quisque commodo venenatis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tempus lacus, ut convallis turpis.</p>
              </div>
              <div className="col-5">
                <div className="service-restaurant col-12">
                  <div className="bg-overlay"></div>
                </div>
                  <h2 className="mt-5 mb-3">Restaurant</h2>
                  <p className="serviceStory">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tempus lacus, ut convallis turpis. Sed eget odio sed erat viverra auctor a quis dolor. Integer at volutpat felis, et volutpat neque. Quisque commodo venenatis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tempus lacus, ut convallis turpis.</p>
              </div>
          </div>
      </section>
      <Banner />
    </>
  );
}

export default OurStory;