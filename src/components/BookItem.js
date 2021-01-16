import React from "react";

// MaterialUI Imports
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    backgroundColor: "#2A2A2A",
    color: "white",
    flexDirection: "row",
    flex: "auto",
    marginBottom: "1rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  media: {
    maxHeight: "500px",
    minHeight: "406px",
    minWidth: "250px",
    maxWidth: "300px",
  },
  content: {
    flex: "1 0 auto ",
    flexDirection: "column",
  },
  MuiTypography: {
    lineHeight: "1.75rem",
  },
});

const BookItem = ({
  title,
  author,
  description,
  thumbnail,
  pageCount,
  infoLink,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Hidden xsDown>
        <CardMedia
          className={classes.media}
          src={thumbnail}
          image={thumbnail}
          title={title}
          style={{ margin: "20px" }}
        />
      </Hidden>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <CardContent>
            <Typography gutterBottom variant="h3" component="h2">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ marginBottom: "1.5rem" }}
              color="inherit"
              component="h2"
            >
              Written by: {author}
            </Typography>
            <Typography
              variant="subtitle2"
              style={{ marginBottom: "1.5rem" }}
              color="inherit"
              component="h2"
            >
              Page count: {pageCount}
            </Typography>
            <Hidden smDown>
              <Typography
                className={classes.MuiTypography}
                variant="body1"
                color="inherit"
                component="p"
              >
                {description}
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <Typography
                className={classes.MuiTypography}
                variant="body1"
                color="inherit"
                component="p"
              >
                {description.length > 500
                  ? description.substring(0, 500) + "..."
                  : description}
              </Typography>
            </Hidden>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              color="inherit"
              style={{ background: "#00746D" }}
              href={infoLink}
              target="_blank"
            >
              Learn more at books.google
            </Button>
          </CardActions>
        </CardContent>
      </div>
    </Card>
  );
};

export default BookItem;
