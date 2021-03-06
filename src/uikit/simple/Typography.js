import TypographyStyles from "./css modules/typography.module.css";

const properTagNames = ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "pre"];

const Typography = ({ varient, element, style, children }) => {
  let TagName = properTagNames.includes(element?.trim())
    ? element?.trim()
    : "p";

  return (
    <TagName
      className={
        varient
          ? Object.keys(TypographyStyles).includes(varient)
            ? TypographyStyles[varient]
            : TypographyStyles["pages-header"]
          : TypographyStyles["pages-header"]
      }
      style={style}
    >
      {children}
    </TagName>
  );
};

export default Typography;
