import Button from "../simple/Button";
import Typography from "../simple/Typography";
import PlanStyles from "./css/css modules/plan.module.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const Plan = ({ id, name, features, price, duration, paid }) => {
  const [checkout, setCheckout] = useState(false);
  return (
    <div className={PlanStyles["plan-wrapper"]}>
      <Typography varient="caption" element="p">
        {name}
      </Typography>
      <div className={PlanStyles["wrapper"]}>
        <Typography varient="page-header" element="h2">
          ${price}
        </Typography>
        <Typography varient="labels" element="p">
          per {duration}
        </Typography>
      </div>
      <hr />
      <menu className={PlanStyles["features-menu"]}>
        {features.map((feature, index) => (
          <li key={index}>
            <Typography varient="section-content" element="p">
              {feature}
            </Typography>
          </li>
        ))}
      </menu>
      <div
        className={PlanStyles["backdrop"]}
        style={{
          pointerEvents: checkout ? "all" : "none",
          opacity: checkout ? "1" : "0",
        }}
        onClick={() => setCheckout(false)}
      ></div>
      <div
        className={
          PlanStyles["popup"] + " " + (checkout ? PlanStyles["active"] : "")
        }
      >
        <button onClick={() => setCheckout(false)}>✖</button>
        <PayPalScriptProvider
          options={{
            "client-id":
              "AWKWk7u-fhpEWxhz0nGVdbSebu7XyXwBIfk7xe2XtPuY4jIhm12EQjYT6A8EWI9dQIrsIxam0OHasfrH",
          }}
        >
          <PayPalButtons
            createOrder={(data, actions) => {
              return fetch("https://securitycubes.com/api/CreatePayment/", {
                method: "POST",
                headers: {
                  Authorization: "Token " + localStorage.getItem("token"),
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: id }),
              })
                .then((res) => {
                  return res.json();
                })
                .then((json) => {
                  return json.id;
                });
            }}
            onApprove={(data, actions) => {
              return fetch("https://securitycubes.com/api/CapturePayment/", {
                method: "POST",
                headers: {
                  Authorization: "Token " + localStorage.getItem("token"),
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ order_id: data.orderID }),
              })
                .then((res) => {
                  return res.json();
                })
                .then((json) => {
                  console.log(json);
                });
            }}
          />
        </PayPalScriptProvider>
      </div>
      {!paid &&
        (localStorage.getItem("token") ? (
          <Button varient="tertiary" onClick={(event) => setCheckout(true)}>
            Join Now
          </Button>
        ) : (
          <Button varient="tertiary" to="/account">
            Join Now
          </Button>
        ))}
      {paid && <Button varient="tertiary-disabled">Joined</Button>}
    </div>
  );
};

export default Plan;
