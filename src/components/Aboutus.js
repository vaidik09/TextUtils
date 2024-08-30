import React from 'react';

function Aboutus(props) {

  return (
    <div className={` text-${props.mode === "dark" ? "white" : "black"}`} style={{ padding: '20px', fontFamily: 'Arial, sans-serif', color: props.mode === "dark" ? "white" : "black",}}>
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Text Analyzer</strong>, your go-to tool for all things related to text analysis! 
        Our app is designed to provide quick and accurate insights into your text, 
        helping you understand its structure, readability, and key metrics.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to empower users with the tools they need to effectively analyze and optimize their written content. 
        Whether you're a student, a professional writer, or simply someone who enjoys writing, 
        Text Analyzer is here to assist you in improving the quality and effectiveness of your text.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li><strong>Word Count:</strong> Get an accurate word and character count instantly.</li>
        <li><strong>Readability Score:</strong> Understand how easy or difficult your text is to read.</li>
        <li><strong>Keyword Density:</strong> Identify the frequency of key terms in your text.</li>
        <li><strong>Sentiment Analysis:</strong> Analyze the tone and sentiment of your content.</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <p>
        At Text Analyzer, we believe in simplicity and efficiency. 
        Our app is designed with a user-friendly interface that allows you to analyze your text with just a few clicks. 
        We are committed to providing accurate and reliable results to help you enhance your writing.
      </p>

      <h2>Contact Us</h2>
      <p>
        Have questions or feedback? We’d love to hear from you! 
        Reach out to us at <a href="mailto:support@appleanalyzer.com" style={{ color: props.mode === "dark" ? "white" : "black" }}>support@textanalyzer.com</a>.
      </p>
    </div>
  );
}

export default Aboutus;
