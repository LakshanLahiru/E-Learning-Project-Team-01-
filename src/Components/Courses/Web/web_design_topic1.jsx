import React from "react";
import "./web_design_topics.css";
import webDesignImage from "./images/How_to_Learn_Web_Designing.jpg";

export default function Web_design_topic1() {
  return (
    <div>
      <h2 className="web_topic_h2">What is Web Designing?</h2>
      <p className="web_topic_p">
        Web designing is the process of planning, conceptualizing, and
        implementing the plan for designing a website in a way that is
        functional and offers a good user experience.
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

      <h2 className="web_topic_h2">What is Responsive Web Design?</h2>
      <p className="web_topic_p">
        Responsive web design is a technique used to make certain changes to a
        website such that it adapts to the screen size and orientation of
        different devices. A website designed for bigger screens does not fit
        small screens seamlessly, which causes inconvenience for viewers.
        Therefore, responsive web design has become a very important factor that
        influences user experience in recent times, as people use their
        smartphones and tablets to browse through websites.
      </p>
    </div>
  );
}
