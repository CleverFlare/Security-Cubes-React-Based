import reactStringReplace from "react-string-replace";
import React, { useEffect, useState } from "react";
import "./css/terminal.css";
import "./css/description.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const test = `
<h1>Introduction to pacman package manager</h1>
<p>sometimes you want to download a software program or an application on your local machine, this is done in arch linux via a command called pacman, pacman is a package manager for arch linux, which allows you to perform a variety of actions on your pc, for example if you wanna download visual studio code, just run the following command.</p>
<code>sudo pacman -S code</code>
<p>note: before you install any package, make sure you run the following command</p>
<code>sudo pacman -Syu</code>
<p>so what does this command do? 🤔 well, it updates the system, and if you're wondering why do we need to update the system before any installation, it's because if we don't do that most probably we will come across an error saying that it could not find the package you're searching for, this occurs because your arch distro has a private copy of the list of packages you can install, and this list contains URLs for these packages, if one package gets a new update, most probably the URL will change, and therefore you can use the old URL no more since it points to the old version which will be unavailable, so you're exposing yourself to a big issue, just always make sure to update the system every time you wanna install a new package.</p>
<hr />
<h2>A list of commands you can use</h2>
<code li>command 1</code li>
<code li>command 2</code li>
<li>command 3  (just normal list item, no code here)</li>
<li>command 2  (just normal list item, no code here)</li>
<li>command 1  (just normal list item, no code here)</li>
<h3>here is a video:</h3>
<youtube>https://www.youtube.com/embed/xcJtL7QggTI</youtube>
`;

const Tab = ({ name, onClose, onClick, active }) => {
  return (
    <div className={"tab" + ` ${active && "active"}`} onClick={onClick}>
      <p className="tab-name">{name}</p>
      <button className="tab-close" onClick={onClose}>
        ✖
      </button>
    </div>
  );
};

const TerminalTab = ({ show, id, token }) => {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);

  const handleNewInputSubmitted = (event) => {
    event.preventDefault();
    const dataBody = {
      SolutionInput: command,
      exampleid: `${id}`,
    };
    if (!command) return;
    fetch("https://securitycubes.com/api/Solution/", {
      method: "POST",
      headers: {
        Authorization: "Token " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBody),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOutput((oldOutput) => [
          ...oldOutput,
          {
            command: command,
            response: data.solution,
          },
        ]);
        setCommand("");
      });
  };
  return (
    <div className="terminal-tab" style={{ display: show ? "flex" : "none" }}>
      {output.length > 0 && (
        <div className="terminal-output">
          {output.map((output, index) => (
            <React.Fragment key={index}>
              <p className="output-command">{output.command}</p>
              <p className="output-response">{output.response}</p>
            </React.Fragment>
          ))}
        </div>
      )}
      <form className="terminal-input" onSubmit={handleNewInputSubmitted}>
        <span>$</span>
        <input
          type="text"
          value={command}
          onChange={(event) => setCommand(event.target.value)}
        />
      </form>
    </div>
  );
};

const Terminal = ({ token }) => {
  const [description, setDescription] = useState("");
  const [currentTab, setCurrentTab] = useState(0);
  const [tabs, setTabs] = useState([0]);
  const [data, setData] = useState(null);
  const [lessonID, setLessonID] = useState(null);
  const { id } = useParams();

  const handlePreventPropigationAndDefault = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleCurrentTabChange = (id) => {
    const idPosition = tabs.indexOf(id);
    if (currentTab === tabs[idPosition]) {
      if (idPosition > 0) {
        setCurrentTab(tabs[idPosition - 1]);
        console.log(tabs[idPosition - 1]);
      } else {
        setCurrentTab(tabs[idPosition + 1]);
        console.log(tabs[idPosition + 1]);
      }
    }
  };

  const handleAddTab = (event) => {
    handlePreventPropigationAndDefault(event);
    setTabs((oldTabs) => [...oldTabs, Date.now()]);
  };

  const handleDeleteTab = (event, id) => {
    handlePreventPropigationAndDefault(event);
    if (tabs.length <= 1) return;
    handleCurrentTabChange(id);
    setTabs((oldTabs) => oldTabs.filter((tab) => tab !== id));
  };

  const handleSelectTab = (event, id) => {
    handlePreventPropigationAndDefault(event);
    setCurrentTab(id);
  };

  useEffect(() => {
    fetch("https://securitycubes.com/api/Solution/?exampleid=" + id, {
      headers: {
        Authorization: "Token " + token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLessonID(data.id);
      });
    setDescription(
      reactStringReplace(test, /<h1>(.*?)<\/h1>/gi, (match, i) => (
        <h1 key={match + i}>{match}</h1>
      ))
    );
    setDescription((last) =>
      reactStringReplace(last, /<h2>(.*?)<\/h2>/gi, (match, i) => (
        <h2 key={match + i}>{match}</h2>
      ))
    );
    setDescription((last) =>
      reactStringReplace(last, /<h3>(.*?)<\/h3>/gi, (match, i) => (
        <h3 key={match + i}>{match}</h3>
      ))
    );
    setDescription((last) =>
      reactStringReplace(last, /<h4>(.*?)<\/h4>/gi, (match, i) => (
        <h4 key={match + i}>{match}</h4>
      ))
    );
    setDescription((last) =>
      reactStringReplace(last, /<h5>(.*?)<\/h5>/gi, (match, i) => (
        <h5 key={match + i}>{match}</h5>
      ))
    );
    setDescription((last) =>
      reactStringReplace(last, /<h6>(.*?)<\/h6>/gi, (match, i) => (
        <h6 key={match + i}>{match}</h6>
      ))
    );
    setDescription((last) =>
      reactStringReplace(last, /<code>(.*?)<\/code>/gi, (match, i) => (
        <p key={match + i} className="code">
          {match}
        </p>
      ))
    );
    setDescription((last) =>
      reactStringReplace(last, /<p>(.*?)<\/p>/gi, (match, i) => (
        <p key={match + i}>{match}</p>
      ))
    );
    setDescription((last) =>
      reactStringReplace(last, /<b>(.*?)<\/b>/gi, (match, i) => (
        <b key={match + i}>{match}</b>
      ))
    );
    setDescription((last) =>
      reactStringReplace(last, /(<hr \/>)/gi, (match, i) => (
        <hr key={match + i} />
      ))
    );
    setDescription((last) =>
      reactStringReplace(last, /<codeli>(.*?)<\/codeli>/gi, (match, i) => (
        <p key={match + i} className="code-list-item">
          {match}
        </p>
      ))
    );
    setDescription((last) =>
      reactStringReplace(last, /<li>(.*?)<\/li>/gi, (match, i) => (
        <p key={match + i} className="list-item">
          {match}
        </p>
      ))
    );
    setDescription((last) =>
      reactStringReplace(last, /<youtube>(.*?)<\/youtube>/gi, (match, i) => (
        <iframe
          key={match + i}
          style={{ width: "100%", aspectRatio: "2 / 1.2" }}
          src={match}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))
    );
  }, []);

  return (
    <div className="sector" id="terminal" style={{ paddingBottom: "0px" }}>
      <div className="guide">
        <div className="guide-header">
          <span>Learn</span>
        </div>
        <div className="guide-body" dir="ltr">
          {data && data.SolutionDescription}
          {!data && "Loading..."}
        </div>
      </div>
      <div className="bash">
        <div className="bash-header">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              name={"bash" + " " + (index + 1)}
              active={currentTab === tab}
              onClick={(event) => handleSelectTab(event, tab)}
              onClose={(event) => handleDeleteTab(event, tab)}
            />
          ))}
          {tabs.length < 4 && (
            <button className="add-tab" onClick={handleAddTab}>
              +
            </button>
          )}
        </div>
        <div className="bash-body">
          {tabs.map((tab, index) => (
            <TerminalTab
              id={id}
              key={tab}
              token={token}
              show={currentTab === tab}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(Terminal);
