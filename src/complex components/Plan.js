import Button from "../components/Button";
import Typography from "../components/Typography";
import PlanStyles from "./css/css modules/plan.module.css";

const Plan = ({ name, features, price, duration }) => {
  return (
    <div className={PlanStyles.planWrapper}>
      <Typography varient="caption" element="p">
        {name}
      </Typography>
      <div className={PlanStyles.wrapper}>
        <Typography varient="pageHeader" element="h2">
          ${price}
        </Typography>
        <Typography varient="labels" element="p">
          per {duration}
        </Typography>
      </div>
      <hr />
      <menu className={PlanStyles.featuresMenu}>
        {features.map((feature, index) => (
          <li key={index}>
            <Typography varient="sectionContent" element="p">
              {feature}
            </Typography>
          </li>
        ))}
      </menu>
      <Button varient="tertiary">Join Now</Button>
    </div>
  );
};

export default Plan;
