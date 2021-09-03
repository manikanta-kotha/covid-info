import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";

export default function LoadingButton(props) {
  const classes = useStyles();

  const { title, loading, ...rest } = props;
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant="outlined"
          color="primary"
          className={classes.buttonClassname}
          disabled={loading}
          {...rest}
        >
          {title}
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
}
