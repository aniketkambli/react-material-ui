import {
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  alpha,
  Badge,
  Avatar,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/Mail";
import { Cancel, Notifications } from "@material-ui/icons";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  SearchIcon: {
    marginLeft: theme.spacing(1),
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "70%",
    },
  },
  icons: {
    display: (props) => (props.open ? "none" : "flex"),

    alignItems: "center",
  },
  logoLarge: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  cancel: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logoSmall: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  searchButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar style={{ backgroundColor: "black" }}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoSmall}>
          Aniket Kambli
        </Typography>
        <div className={classes.search}>
          <SearchIcon className={classes.SearchIcon} />
          <InputBase placeholder="Search....." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <SearchIcon
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="primary" className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc" />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
