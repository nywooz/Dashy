import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BarChartIcon from "@material-ui/icons/BarChart";
import TableIcon from "@material-ui/icons/TableChart";
import LayersIcon from "@material-ui/icons/Layers";
import Extension from "@material-ui/icons/Extension";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    ...theme.mixins.toolbar
  },
  home: {
    // background:"red"
  },

  categoryHeaderPrimary: {
    color: "rgb(204, 204, 204)"
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4
    // color: "rgba(255, 255, 255, 0.7)"
  },
  itemCategory: {
    backgroundColor: theme.mixins.toolbar,
    paddingTop: 16,
    paddingBottom: 16
  },

  itemActionable: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.08)"
    }
  },
  itemActiveItem: {
    backgroundColor: "rgb(188, 188, 188)"
  },
  itemPrimary: {
    color: "inherit",
    fontSize: theme.typography.fontSize,
    "&$textDense": {
      fontSize: theme.typography.fontSize
    }
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  logo: {
    backgroundColor: "#2196f3",
    color: theme.palette.common.white,
    height: 64,
    "&:hover": {
      backgroundColor: "#1976d2"
    }
  }
});

const categories = [
  {
    id: "Project Overview",
    children: [
      {
        id: "Dashboard",
        icon: <DashboardIcon />,
        active: true,
        linkTo: "/"
      },
      { id: "Integrations", icon: <Extension />, linkTo: "/" },
      { id: "Grid Layout", icon: <LayersIcon />, linkTo: "/dashboard" },
    ]
  },
  {
    id: "Pages",
    children: [
      {
        id: "Login",
        icon: "",
        active: false,
        linkTo: "/SignIn"
      },
      { id: "Register", icon: <DashboardIcon />, linkTo: "/" },
      { id: "Forgot Password", icon: <DashboardIcon />, linkTo: "/" },
      { id: "Charts", icon: <BarChartIcon />, linkTo: "/" },
      {
        id: "Table",
        icon: <TableIcon />,
        linkTo: "/"
      },
      { id: "Search Input", icon: <SearchIcon />, linkTo: "/searchInput" },
      {
        id: "Simple real-time search",
        icon: <SearchIcon />,
        linkTo: "/search"
      },

      { id: "404 Page", icon: <DashboardIcon />, linkTo: "/randompage" },
      { id: "Blank Page", icon: <DashboardIcon />, linkTo: "/Blank" }
    ]
  },
  {
    id: "Material UI",
    children: [
      {
        id: "Buttons",
        icon: <DashboardIcon />,
        active: false,
        linkTo: "/materialui"
      },
      {
        id: "Cards",
        icon: <DashboardIcon />,
        linkTo: "/materialui1"
      },
      {
        id: "Panels",
        icon: <DashboardIcon />,
        linkTo: "/materialui2"
      },
      {
        id: "Misc",
        icon: <DashboardIcon />,
        linkTo: "/materialui5"
      }
    ]
  }
];

function Navigator(props) {
  const { classes, ...other } = props;

  return (
    <React.Fragment>
      <List disablePadding>
        <ListItem
          button
          onClick={props.handleDrawerToggle}
          className={classNames(
            classes.firebase,
            classes.item,
            classes.itemCategory,
            classes.logo
          )}
        >
          <ChevronLeftIcon className={classes.extendedIcon} />
          <Typography color="inherit" noWrap>
            Portfolio
          </Typography>
        </ListItem>

        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, linkTo }) => (
              <ListItem
                button
                dense
                key={childId}
                className={classNames(
                  classes.item,
                  classes.itemActionable,
                  active && classes.itemActiveItem
                )}
                component={props => <Link to={linkTo} {...props} />}
              >
                {icon && (
                  <ListItemIcon
                    className={classNames(active && classes.itemActiveItem)}
                  >
                    {icon}
                  </ListItemIcon>
                )}

                <ListItemText
                >
                  {childId}
                </ListItemText>
              </ListItem>
            ))}
            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </React.Fragment>
  );
}
export default withStyles(styles)(Navigator);
