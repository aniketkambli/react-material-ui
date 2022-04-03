import { makeStyles } from "@material-ui/core";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
const useStyles = makeStyles((theme) => ({}));
const App = () => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Leftbar />
      </div>
    </>
  );
};

export default App;
