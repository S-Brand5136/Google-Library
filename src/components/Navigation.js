import React from "react";

// MaterialUI Imports
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  MuiBox: {
    marginTop: "5rem",
    color: "white",
  },
});

const Navigation = () => {
  const classes = useStyles();

  return (
    <Box className={classes.MuiBox}>
      <Grid
        container
        direction="row"
        wrap="nowrap"
        justify="flex-end"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography className={classes.MuiTypography} variant="h3">
            Google Library
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navigation;
