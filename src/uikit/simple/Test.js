import reactStringReplace from "react-string-replace";
import { useState, useEffect } from "react";
import "./css modules/test.css";

const Test = ({ children }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(
      reactStringReplace(children, /<h1>(.*?)<\/h1>/gi, (match, i) => (
        <h1 key={i + "h1"}>{match}</h1>
      ))
    );
    setContent((last) =>
      reactStringReplace(last, /<h2>(.*?)<\/h2>/gi, (match, i) => (
        <h2 key={i + "h2"}>{match}</h2>
      ))
    );
    setContent((last) =>
      reactStringReplace(last, /<h3>(.*?)<\/h3>/gi, (match, i) => (
        <h3 key={i + "h3"}>{match}</h3>
      ))
    );
    setContent((last) =>
      reactStringReplace(last, /<h4>(.*?)<\/h4>/gi, (match, i) => (
        <h4 key={i + "h4"}>{match}</h4>
      ))
    );
    setContent((last) =>
      reactStringReplace(last, /<h5>(.*?)<\/h5>/gi, (match, i) => (
        <h5 key={i + "h5"}>{match}</h5>
      ))
    );
    setContent((last) =>
      reactStringReplace(last, /<h6>(.*?)<\/h6>/gi, (match, i) => (
        <h6 key={i + "h6"}>{match}</h6>
      ))
    );
    setContent((last) =>
      reactStringReplace(last, /<code>(.*?)<\/code>/gi, (match, i) => (
        <p
          key={i + "code"}
          style={{
            backgroundColor: "black",
            color: "#d1d1d1",
            padding: "10px",
            borderRadius: "10px",
            fontFamily: "monospace",
            width: "max-content",
          }}
        >
          {match}
        </p>
      ))
    );
    setContent((last) =>
      reactStringReplace(last, /<p>(.*?)<\/p>/gi, (match, i) => (
        <p key={i + "p"}>{match}</p>
      ))
    );
    reactStringReplace(children, /(<p>)(.*?)(<\/p>)/gi, (match, i) => {
      console.log(match);
    });
  }, [children]);

  return <div className="test">{content}</div>;
};

export default Test;
