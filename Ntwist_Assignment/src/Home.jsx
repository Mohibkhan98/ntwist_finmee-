import React from "react";
import "./Home.css"; 
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  return (
    <div className="home">
      <div className="background-image">
        <Navbar />
{/* details  content */}
        <div className="left-content">
          <h1>
            Data-Powered Solutions <br /> for Industrial Excellence
          </h1>
          <button className="read-more">Read More</button>
        </div>

        <div className="right-content">
          <img
            src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"
            alt="Right Content"
          />
        </div>

        <div className="bottom-left-content">
          <h2>
            Mine-To-Mill-To-Mine <br /> Optimization
          </h2>
          <p>
            NTWIST’s newest product unlocks up to $250/oz in previously
            inaccessible value in <br /> open pit gold mines by connecting
            siloed data sources like block models, fleet <br /> management
            systems, stockpile surveys, and plant instruments. This allows your
            <br /> company to better track material flow, and feed properties,
            identify plan/production
            <br /> discrepancies, and correct resource models and production
            plans.
          </p>
          <button className="read-more">Read More</button>
        </div>

        <div className="bottom-right-content">
          <img
            src="https://ntwist.com/wp-content/uploads/2023/01/iStock-1339284457-1536x1024.jpg"
            alt="Bottom Right Content"
          />
        </div>
        {/* 2nd */}
        <div className="bottom_2">
        <div className="bottom-left-content-2">
          <img
            src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1284372575.jpg"
            alt="Bottom left-2 Content"
          />
        </div>
        
        <div className="bottom-right-content-2">
          <h2>Sustainability</h2>
          <p>
            Sustainability Environmental stewardship is a priority for NTWIST.
            We help our customers to <br /> minimize their sustainability impact on the
            planet. Emissions or environmental <br /> targets are used alongside
            productivity targets to define success for our customers. <br /> <br /> With the
            increasing relevance of carbon accounting and emissions tracking, <br />
            NTWIST offers a suite of tools to increase visibility into
            environmental performance <br /> and help processing plants track, manage,
            optimize, and report key metrics.
          </p>
          <button className="read-more-2">Read More</button>
        </div>
        </div>

        {/* botumn 3 */}

        <div className="botumn_3">
        
        <div className="bottom-left-content-3">
          <h2>
          Mineral Processing
          </h2>
          <p>
            NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our <br /> solutions help operations to reduce the effect of feed variability, avoid downtime <br /> and increase peak throughput while decreasing energy and reagent consumption.
          </p>
          <button className="read-more-3">Read More</button>
        </div>

        <div className="bottom-right-content-3">
          <img
            src="https://ntwist.com/wp-content/uploads/2021/12/iStock-1322302283.jpg"
            alt="Bottom Right Content 3"
          />
        </div>
        <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Home;
