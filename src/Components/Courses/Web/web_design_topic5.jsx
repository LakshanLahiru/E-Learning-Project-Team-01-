import React from "react";
import './web_design_topics.css';

export default function Web_design_topic5() {
  return (
    <div>
      <h2 className="web_topic_h2">Web Design Vs. Web Development</h2>
      <p className="web_topic_p">
        Web design and{" "}
        <a
          href="https://www.simplilearn.com/top-web-development-tools-and-career-tips-for-web-developer-article"
          target="_blank"
          rel="noopener"
          title="web development"
          className=".web_design_a"
        >
          web development
        </a>{" "}
        are two terms that are often used interchangeably. However, they both
        mean two different things, have different purposes, and require a
        different set of skills to be implemented on a website. Web design is
        more about the experiential side of a website that ensures the audience
        finds the website useful, immersive, and engaging. It is highly
        intuitive based on the expectations of the users and uses this knowledge
        of user expectations to ensure an excellent user experience. Web
        development, on the other hand, involves building and maintaining a
        website with the help of coding systems so that the website functions
        smoothly with no glitches.
      </p>
    </div>
  );
}
