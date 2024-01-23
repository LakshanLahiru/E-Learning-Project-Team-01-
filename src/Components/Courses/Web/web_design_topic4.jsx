import React from "react";
import './web_design_topics.css';

export default function Web_design_topic4() {
  return (
    <div>
      <h2 className="web_topic_h2">Key Elements of Web Design</h2>
      <p className="web_topic_p">
        A good website is one that displays a careful balance between appearance
        and functionality. When your website is aesthetically pleasing but fails
        to offer the information or help your audience with what it looks for,
        the aesthetics cannot make up for the lack of functionality and vice
        versa. Therefore, web design comprises two broad key elements—aesthetic
        or visual elements and functional elements—that are of equal importance
        to make your website stand out.
      </p>
      <h3 className='web_topic_h3'>Visual Elements</h3>
      <p className="web_topic_p">
        Visual elements come together and set a theme for your website, which
        leaves a great impact on visitors when you get it right. It is crucial
        that every element compliments one another and looks harmonious rather
        than chaotic. Visual elements include:
      </p>
      <ul>
        <li aria-level="1">Fonts</li>
        <li aria-level="1">Colors</li>
        <li aria-level="1">Shapes</li>
        <li aria-level="1">Layout</li>
        <li aria-level="1">Icons</li>
        <li aria-level="1">Logos</li>
        <li aria-level="1">Images</li>
        <li aria-level="1">Video</li>
      </ul>
      <h3 className='web_topic_h3'>Functional Elements</h3>
      <p className="web_topic_p">
        Functional elements hold great importance in terms of how the search
        engine views your website. However, they go beyond that and can
        influence user experience as well. Some of the salient functional
        elements include the following:
      </p>
      <ul>
        <li aria-level="1">
          Navigation: The ease of access your website offers to your visitors to
          reach different sections of the website
        </li>
        <li aria-level="1">
          User interaction: Offering users control by avoiding needless pop-ups,
          auto-play videos, or overload of information
        </li>
        <li aria-level="1">
          Speed: Ensuring the page loads within a couple of seconds
        </li>
        <li aria-level="1">
          Site structure: A systematic structure that is easy to navigate both
          for visitors and the Google web crawler
        </li>
        <li aria-level="1">Cross-device compatibility</li>
      </ul>
    </div>
  );
}
