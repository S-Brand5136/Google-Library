import React from "react";
import { useSelector } from "react-redux";
import SearchBarNav from "./SearchBarNav";
import BookItem from "./BookItem";

// MaterialUI imports
import {
  Box,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "75vh",
    minWidth: "100%",
  },
  MuiTypography: {
    margin: "5rem",
  },
  MuiLinearProgress: {
    color: "#00948B",
  },
}));

const SearchedItemsGrid = () => {
  const classes = useStyles();
  const searchBookList = useSelector((state) => state.searchBookList);
  const { loading, searchBookList: list, error } = searchBookList;

  return (
    <Box component="section" className={classes.root}>
      <Grid container direction="row">
        <Grid item xs={12} sm={12} lg={2}>
          <SearchBarNav />
        </Grid>
        <Grid container item sm={12} lg={10}>
          {loading && (
            <Grid item xs={12}>
              <LinearProgress />
            </Grid>
          )}
          {!list || list.length <= 0 ? (
            <Grid item xs={12}>
              <Typography
                className={classes.MuiTypography}
                align="center"
                variant="h4"
                component="h2"
              >
                {error
                  ? error
                  : "Start searching for your favourite books with the bar in the left corner.."}
              </Typography>
            </Grid>
          ) : (
            <Grid item xs={12}>
              {list.items ? (
                list.items.map((item) => (
                  <BookItem
                    key={item.id}
                    title={item.volumeInfo.title}
                    author={
                      !item.volumeInfo.authors
                        ? "No author available"
                        : item.volumeInfo.authors[0]
                    }
                    thumbnail={
                      !item.volumeInfo.imageLinks
                        ? "Image unavailable"
                        : item.volumeInfo.imageLinks.thumbnail
                    }
                    pageCount={item.volumeInfo.pageCount}
                    description={
                      item.volumeInfo.description
                        ? item.volumeInfo.description
                        : "No description available"
                    }
                    infoLink={item.volumeInfo.infoLink}
                  />
                ))
              ) : (
                <Typography
                  className={classes.MuiTypography}
                  align="center"
                  variant="h4"
                  component="h2"
                >
                  {error
                    ? error
                    : "Start searching for your favourite books with the bar in the left corner.."}
                </Typography>
              )}
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchedItemsGrid;
