import React from "react";
import "./video_design.css";
import webDesignImage from "./images/5_Video_Editing.webp";

export default function Video_design_topic1() {
  return (
    <div>
      <h2 className="web_topic_h2">What is Vedio Editing?</h2>
      <p className="web_topic_p">
      Video editing involves planning, conceptualizing, 
      and executing to enhance video content, ensuring a functional 
      and enjoyable user experience. It combines technical 
      skills with creativity to deliver compelling visual stories.
        <a
          href="https://www.simplilearn.com/tutorials/ui-ux-career-resources/ux-design-process"
          target="_blank"
          rel="noopener"
          title="User experience"
          className=".web_design_a"
        >
          User experience
        </a>
        is central to the web designing process. Websites have an array of
        elements presented in ways that make them easy to navigate. Web
        designing essentially involves working on every attribute of the website
        that people interact with, so that the website is simple and efficient,
        allows users to quickly find the information they need, and looks
        visually pleasing. All these factors, when combined, decide how well the
        website is designed.
      </p>

      <div className="img_div">
        <img src={webDesignImage} className="web_design_img2" />
      </div>

      <h2 className="web_topic_h2">What is Responsive Video Editing?</h2>
      <p className="web_topic_p">
      Responsive Video Editing refers to the adaptive and versatile approach in editing video content to ensure optimal viewing experiences across various devices and screen sizes. It involves techniques and practices that allow videos to seamlessly adjust to different resolutions and aspect ratios, providing a consistent and engaging experience
       for viewers on desktops, laptops, tablets, and mobile devices Responsive video editing prioritizes flexibility, accessibility, and user satisfaction, enhancing the overall visual impact of video content across a diverse range of platforms.
      </p>
    </div>
  );
}
