import Navigation from "./components/Navigation";
import SearchedItemsGrid from "./components/SearchedItemsGrid";

// MaterialUI Imports
import { Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: "56px",
      paddingRight: "56px",
    },
    paddingLeft: "0px",
    overflow: "hidden",
    paddingRight: "0px",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Container
      component="main"
      classes={{ root: classes.root }}
      maxWidth="xl"
      className="App"
    >
      <Grid
        container
        style={{ padding: "0" }}
        direction="column"
        justify="center"
        spacing={5}
      >
        <Grid item xs={12}>
          <nav>
            <Navigation />
          </nav>
        </Grid>
        <Grid item xs={12}>
          <section>
            <SearchedItemsGrid />
          </section>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
