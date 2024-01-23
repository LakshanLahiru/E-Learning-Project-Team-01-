import "./video_design.css";
import React, { useState } from "react";
import webDesignImage from "./images/background.jpg";
import Video_design_topic1 from "./video_design_topic1";
import Video_design_topic2 from "./video_design_topic2";
import Video_design_topic3 from "./video_design_topic3";
import Video_design_topic4 from "./video_design_topic4";
import Video_design_topic5 from "./video_design_topic5";
import Video_design_topic6 from "./video_design_topic6";
import NevBar from "../../nevbar/NevBar";
import Footer from "../../Footer/Footer";



export default function Video_Design() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    "What is Video Editing",
"What Do Video Editors Do",
/*"Key Benefits of Having Good Video Editing",*/
"Key Elements of Video Editing",
"Video Editing Vs. Video Development",
"What Are the Different Video Editing Tools",
  ]; // Add your topics here

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const renderContent = () => {
    switch (selectedTopic) {
      // case "What is Web Designing":
      //   return <Web_design_topic1 />;
      case "What Do Video Editors Do":
        return <Video_design_topic2 />;
      case "Key Benefits of Having Good Video Editing":
        return <Video_design_topic3 />;
      case "Key Elements of Video Editing":
        return <Video_design_topic4 />;
      case "Video Editing Vs. Video Development":
        return <Video_design_topic5 />;
      case "What Are the Different Video Editing Tools":
        return <Video_design_topic6 />;

      default:
        return <Video_design_topic1 />;
        // return <img src={webDesignImage} className="web_design_img1" />;
    }
  };

  return (
    
    <section className="backgroundweb">
        <div><NevBar/></div>{/*add nevigation bar*/}
      <div>
        
        <div>
          <h1 className="course_header">VEDIO EDITING</h1>
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
