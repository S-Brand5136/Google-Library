import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../actions/searchActions";

import {
  Box,
  Checkbox,
  Grid,
  Input,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "lightGrey",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      borderRadius: "0px",
    },
  },
  option: {
    marginLeft: "1rem",
    maxWidth: "70%",
  },
  optionSelected: {
    marginLeft: "1rem",
    maxWidth: "70%",
  },
  addCursor: {
    cursor: "pointer",
  },
  input: {
    border: "1px solid black",
    borderRadius: "10px",
  },
  root: {
    marginRight: ".5rem",
    [theme.breakpoints.down("md")]: {
      marginRight: "0",
    },
  },
}));

const SearchBarNav = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [orderBySelected, setOrderBySelected] = useState("Relevance");
  const [printTypeSelected, setPrintTypeSelected] = useState("All");
  const [resultShown, setResultShown] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const orderBy = ["Relevance", "Newest"];
  const printType = ["All", "Magazines", "Books"];
  const results = [5, 10, 20];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.match(/[a-z0-9]/gi)) {
      dispatch(
        search(searchTerm, printTypeSelected, orderBySelected, resultShown)
      );
      setSearchTerm("");
    }
  };

  return (
    <Box component="article" className={classes.root}>
      <Grid container direction="column" justify="center">
        <Grid item xs={12}>
          <form
            aria-label="search for titles"
            onSubmit={(e) => handleSearch(e)}
            id="searchForm"
          >
            <Input
              className={classes.input}
              placeholder="Search..."
              id="search-bar"
              color="primary"
              disableUnderline
              autoFocus
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }
            />
          </form>
        </Grid>
        <Grid item xs={12}>
          <List>
            <Grid container direction="row" justify="flex-start">
              <Grid item xs={4} lg={12}>
                <ListItem className={classes.header}>
                  <ListItemText primary="Order By:" />
                </ListItem>
                {orderBy.map((option) => (
                  <ListItem
                    key={option}
                    className={
                      orderBySelected === option
                        ? classes.optionSelected
                        : classes.option
                    }
                  >
                    <Checkbox
                      checked={orderBySelected === option}
                      onChange={() => setOrderBySelected(option)}
                      color="primary"
                    />
                    <ListItemText
                      className={classes.addCursor}
                      selected={orderBySelected === option}
                      onClick={() => setOrderBySelected(option)}
                      primary={option}
                    />
                  </ListItem>
                ))}
              </Grid>
              <Grid item xs={4} lg={12}>
                <ListItem className={classes.header}>
                  <ListItemText primary="Print Type:" />
                </ListItem>
                {printType.map((option) => (
                  <ListItem
                    key={option}
                    className={
                      printTypeSelected === option
                        ? classes.optionSelected
                        : classes.option
                    }
                  >
                    <Checkbox
                      checked={printTypeSelected === option}
                      onChange={() => setPrintTypeSelected(option)}
                      color="primary"
                    />
                    <ListItemText
                      className={classes.addCursor}
                      selected={printTypeSelected === option}
                      onClick={() => setPrintTypeSelected(option)}
                      primary={option}
                    />
                  </ListItem>
                ))}
              </Grid>
              <Grid item xs={4} lg={12}>
                <ListItem className={classes.header}>
                  <ListItemText primary="Results:" />
                </ListItem>
                {results.map((option) => (
                  <ListItem
                    key={option}
                    className={
                      resultShown === option
                        ? classes.optionSelected
                        : classes.option
                    }
                  >
                    <Checkbox
                      checked={resultShown === option}
                      onChange={() => setResultShown(option)}
                      color="primary"
                    />
                    <ListItemText
                      className={classes.addCursor}
                      selected={resultShown === option}
                      onClick={() => setResultShown(option)}
                      primary={option}
                    />
                  </ListItem>
                ))}
              </Grid>
            </Grid>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBarNav;
