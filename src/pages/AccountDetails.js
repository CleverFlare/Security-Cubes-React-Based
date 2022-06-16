import { useEffect, useState } from "react";
import Button from "../uikit/simple/Button";
import FormControl from "../uikit/simple/FormControl";
import Typography from "../uikit/simple/Typography";
import { connect } from "react-redux";
import "./css/accountDetails.css";

const AccountDetails = ({ data, token }) => {
  const [disabledInputs, setDisabledInputs] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    setEmail(data && data.email);
    setUsername(data && data.username);
    setPassword(data && data.password);
    setFirstName(data && data["first_name"]);
    setLastName(data && data["last_name"]);
  }, [data]);

  const handleSubmitChange = () => {
    const updatedData = {
      username,
      password,
      first_name: firstName,
      last_name: lastName,
      email,
    };
    fetch("https://securitycubes.com/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        window.location.reload();
      });
  };

  const handleCancleChange = () => {
    setEmail(data && data.email);
    setUsername(data && data.username);
    setPassword(data && data.password);
    setFirstName(data && data["first_name"]);
    setLastName(data && data["last_name"]);
    setDisabledInputs(true);
  };

  return (
    <div
      id="account-details"
      className="sector"
      onSubmit={(e) => e.preventDefault()}
    >
      <Typography varient="section-header">Account Information</Typography>
      <form className="account-details-form">
        <Typography varient="section-content" style={{ gridColumn: "1 / -1" }}>
          Profile
        </Typography>
        <FormControl
          type="text"
          label="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          disabled={disabledInputs}
        />
        <FormControl
          type="password"
          label="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          disabled={disabledInputs}
        />
        <FormControl
          type="text"
          label="First name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          disabled={disabledInputs}
        />
        <FormControl
          type="text"
          label="Last name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          disabled={disabledInputs}
        />
        <FormControl
          type="email"
          label="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          disabled={disabledInputs}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          {disabledInputs && (
            <Button varient="primary" onClick={() => setDisabledInputs(false)}>
              Update
            </Button>
          )}
          {!disabledInputs && (
            <>
              <Button varient="primary" onClick={handleSubmitChange}>
                Save
              </Button>
              <Button varient="secondary" onClick={handleCancleChange}>
                cancle
              </Button>
            </>
          )}
        </div>
      </form>
      <form className="payment-details-form">
        <Typography varient="section-content" style={{ gridColumn: "1 / -1" }}>
          Payment
        </Typography>
        <FormControl
          type="text"
          label="Expiry date"
          value={data && data?.ExpiredPaidDate}
          readonly
        />
        <FormControl
          type="text"
          label="Start payment date"
          value={data && data?.StartPaidDate}
          readonly
        />
        <FormControl
          type="text"
          label="Plan type"
          value={data && data?.planType}
          readonly
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

export default connect(mapStateToProps)(AccountDetails);
