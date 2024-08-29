import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Hello!");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    text ===""? props.alert("No text found! Please enter text","danger") :
    props.alert("Text converted to Uppercase!","success");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    text ===""? props.alert("No text found! Please enter text","danger") :
    props.alert("Text converted to Lowercase!","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClear = () => {
    setText("");
    text ===""? props.alert("Already Cleared","danger") :
    props.alert("Text Cleared","success");
  };

  return (
    <>
      <div className="mb-3">
        <h2
          className={`form-label text-${
            props.mode === "dark" ? "white" : "black"
          }`}
        >
          {props.title}
        </h2>
        <textarea
          className="form-control"
          style={{
            background: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
          onChange={handleOnChange}
          value={text}
          id="myBox"
          rows="8"
        />
      </div>
      <div className="">
        <button className="btn btn-success" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-danger  mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div
        className={`container my-300 text-${
          props.mode === "dark" ? "white" : "black"
        }`}
        style={{ text: "white" }}
      >
        <h2>Preview</h2>
        <p>{text}</p>
        <small>
          {text.length === 0 ? 0 : text.trim().split(" ").length} words |{" "}
          {text.length} Characters
        </small>
      </div>
    </>
  );
}
