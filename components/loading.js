import classes from "./loading.module.css";

export default function Loading({ loadingText = "Loading..." }) {
  return <p className={classes.loading}>{loadingText}</p>;
}
