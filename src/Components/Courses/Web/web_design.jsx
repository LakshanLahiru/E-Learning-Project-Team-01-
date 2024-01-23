import "./web_design.css";
import React, { useState } from "react";
import webDesignImage from "./images/What_is_Web_Designing.jpg";
import Web_design_topic1 from "./web_design_topic1";
import Web_design_topic2 from "./web_design_topic2";
import Web_design_topic3 from "./web_design_topic3";
import Web_design_topic4 from "./web_design_topic4";
import Web_design_topic5 from "./web_design_topic5";
import Web_design_topic6 from "./web_design_topic6";
import NevBar from "../../nevbar/NevBar";
import Footer from "../../Footer/Footer";

export default function Web_Design() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    "What is Web Designing",
    "What Do Web Designers Do",
    "Key Benefits of Having a Good Web Design",
    "Key Elements of Web Design",
    "Web Design Vs. Web Development",
    "What Are the Different Web Design Tools",
  ]; // Add your topics here

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const renderContent = () => {
    switch (selectedTopic) {
      // case "What is Web Designing":
      //   return <Web_design_topic1 />;
      case "What Do Web Designers Do":
        return <Web_design_topic2 />;
      case "Key Benefits of Having a Good Web Design":
        return <Web_design_topic3 />;
      case "Key Elements of Web Design":
        return <Web_design_topic4 />;
      case "Web Design Vs. Web Development":
        return <Web_design_topic5 />;
      case "What Are the Different Web Design Tools":
        return <Web_design_topic6 />;

      default:
        return <Web_design_topic1 />;
        // return <img src={webDesignImage} className="web_design_img1" />;
    }
  };

  return (
    
    <section className="backgroundweb">
        <div><NevBar/></div>{/*add nevigation bar*/}
      <div>
        
        <div>
          <h1 className="course_header">WEB DESIGNING</h1>
        </div>
        <div className="course_data">
          {/* Topics Div */}
          <div className="topics_div">
            {/* <ul>
              {topics.map((topic) => (
                <li
                  key={topic}
                  onClick={() => handleTopicClick(topic)}
                  className="topics"
                >
                  {topic}
                </li>
              ))}
            </ul> */}

            {/* {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => handleTopicClick(topic)}
                className="topics"
              >
                {topic}
              </button>
            ))} */}

            {/* {topics.map((topic) => (
              <label
                key={topic}
                onClick={() => handleTopicClick(topic)}
                className="topics"
              >
                {topic}
              </label>
            ))} */}

            {topics.map((topic) => (
              <label
                key={topic}
                onClick={() => handleTopicClick(topic)}
                className={`topics ${
                  selectedTopic === topic ? "selected" : ""
                }`}
              >
                {topic}
              </label>
            ))}
          </div>

          {/* Content Div */}
          <div className="content_div">{renderContent()}</div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}
