import React from "react";
import "./Experience.css";
import SriDalada from "../media/Sri-Dalada.jpg";
import botanicalGarden from  "../media/Peradeniya.jpg";
import Mountain from "../media/hanthana.jpg";
import Sanctuary from "../media/Udawatte.jpg";
import Museum from "../media/Ceylon-Tea.jpg";
import { NavMenu } from "../components/NavMenu";

function Experience() {
    return (
        <>
            <NavMenu />
            <section className="d-flex home-header">
                <div className="header-content d-flex justify-content-center align-items-center col-6">
                    <div className="content">
                        <h1 className="expHeading">Experience</h1>
                        <hr className="hrStory col-9"></hr>
                        <p className="contentStory mt-3">
                            Take advantage of our prime location to explore the vibrant city of kandy. From historical landmarks to bustling markets immerse yourself in the rich local culture and experience all that within easy reach from our hotel.
                        </p>
                    </div>
                </div>
                <div className="expImage col-6">
                    <div className="bg-overlay-si d-flex justify-content-end">
                        <button className="mt-3 mx-5 px-5 py-2 btn-book-now">Book Now</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="Kandy-content">
                    <h1 className="Kandy-Heading">Places to visit in Kandy</h1>
                    <div className=" place-content">
                        <div className="d-flex align-items-center ">
                            <img  className="KandyImages" src={SriDalada}></img>
                            <div className="ms-5">
                                <h2 className="mb-4">Sri Dalada Maligawa (Temple of Tooth Relic)</h2>
                                <p>The Sri Dalada Maligawa, also known as the Temple of the Sacred Tooth Relic, is a revered Buddhist temple located in Kandy, Sri Lanka. It is one of the most sacred sites for Buddhists around the world and a major pilgrimage destination. The temple houses the tooth relic of Lord Buddha, which is believed to be the left canine tooth of the Buddha himself.</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-5">
                            <img  className="KandyImages" src={botanicalGarden}></img>
                            <div className="ms-5">
                                <h2>Royal Botanical Garden, Peradeniya</h2>
                                <p>The Royal Botanical Garden, Peradeniya, dates back to the 14th century when it served as a pleasure garden for the Kandyan kings. It was later transformed into a botanical garden during the British colonial era in the 19th century. Today, it stands as a testament to the island's rich botanical heritage and showcases an extensive collection of plant species from around the world.</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-5">
                            <img  className="KandyImages" src={Mountain}></img>
                            <div className="ms-5" >
                                <h2>Hanthana Mountain Range</h2>
                                <p>The Hanthana Mountain Range stands tall with its lush greenery, mist-covered peaks, and cascading waterfalls, creating a picturesque backdrop that will leave you in awe. The range is known for its diverse ecosystem, which encompasses dense forests, tea plantations, and crystal-clear streams, providing a haven for an incredible variety of flora and fauna.
                                    For those seeking a more leisurely experience, indulge in a leisurely picnic amidst the scenic beauty of the mountain range. Breathe in the fresh mountain air and unwind as you bask in the tranquility of nature.
                                </p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-5 ">
                            <img  className="KandyImages" src={Sanctuary}></img>
                            <div className="ms-5">
                                <h2>Udawatte Kele Sanctuary</h2>
                                <p>The Udawatte Kele Sanctuary is a lush oasis that provides a sanctuary for diverse flora and fauna. This protected forest reserve is a haven for nature lovers, offering a peaceful retreat away from the hustle and bustle of city life. Immerse yourself in the soothing sounds of birdsong, the gentle rustling of leaves, and the harmonious symphony of nature.</p>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mt-5">
                            <img  className="KandyImages" src={Museum}></img>
                            <div className="ms-5">
                                <h2>Ceylon tea Mueseum</h2>
                                <p>Immerse yourself in the captivating world of Ceylon tea at the renowned Ceylon Tea Museum, located in the heart of Sri Lanka's lush tea country. As a guest at our hotel, you have the unique opportunity to delve into the rich history, culture, and flavors of one of the world's most celebrated beverages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience;