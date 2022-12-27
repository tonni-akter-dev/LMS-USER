import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Dashboard.css';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
    marginBottom: 0
  },
}));

const Dashboard = () => {
  // const { user, admin, logout } = useAuth();
  const classNamees = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-sm-12 dashboard">
          <div className="text-center">
            <img height="50px" className="mx-auto" src="https://i.ibb.co/y48PY0V/pu-logo-1.png" alt="" />
            <h5><Link to="/" style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "block",
                    color: "white",
                  }}>Presidency University Library</Link></h5>
          </div>
          <br />
          <div className="text-light">
            {/* catalog dropdown */}
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classNamees.root}
            >
              {/* dashboard */}
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <Link
                  className="sidebar_item"
                  to={`/dashboard`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "block",
                    color: "white",
                  }}
                >
                  Dashboard
                </Link>
                <ExpandMore />
              </ListItem>
              {/* dashboard icon ends */}

              {/* CATALOGUE */}
              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <Link
                  className="sidebar_item"
                  to={`/dashboard/myaccount`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "block",
                    color: "white",
                  }}
                >
                  Catalogue
                </Link>
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse className="items_margin" in={open} timeout="auto" unmountOnExit>
                <List component="span" >
                  <ListItem button >
                    <ListItemIcon className={classNamees.nested}>
                      <StarBorder />
                    </ListItemIcon>
                    {/* <ListItemText primary="Starred" /> */}
                    <Link
                      className="sidebar_item"
                      to={`/dashboard/catalouge/books`}
                      style={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        display: "block",
                        color: "white",
                      }}
                    >
                      Books
                    </Link>
                  </ListItem>
                </List>
              </Collapse>

              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="span" >
                  <ListItem button >
                    <ListItemIcon className={classNamees.nested}>
                      <StarBorder />
                    </ListItemIcon>
                    {/* <ListItemText primary="Starred" /> */}
                    <Link
                      className="sidebar_item"
                      to={`/dashboard/catalouge/thesis`}
                      style={{
                        textDecoration: "none",
                        fontWeight: "bold",
                        display: "block",
                        // marginBottom: "30px",
                        color: "white",
                      }}
                    >
                      Thesis
                    </Link>
                  </ListItem>
                </List>
              </Collapse>
             
              {/* My Account starts */}
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <Link
                  className="sidebar_item"
                  to={`/dashboard/myaccount`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "block",
                    color: "white",
                  }}
                >
                  My Account
                </Link>
                <ExpandMore />
              </ListItem>
              {/* My Account ends */}





            </List>

            {/* catalog dropdown */}


          </div>


        </div>



        {/* dashport */}
        <div className="col-lg-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
