import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, ListItemButton } from "@mui/material";
import { useState } from "react";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

type ContentsType = {
  text: string;
  path: string;
  isFolder: boolean;
  contents?: Array<{ text: string; path: string }>;
};
type LeftDrawerPropsType = {
  contents: Array<ContentsType>;
};
export const LeftDrawer: React.FC<LeftDrawerPropsType> = ({ contents }) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [listOpen, setListOpen] = useState(false);

  const handleClick = () => {
    setListOpen(!listOpen);
  };
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          Оглавление
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {contents.map((e, index) =>
            e.isFolder ? (
              <>
                <ListItemButton onClick={handleClick}>
                  <ListItemIcon>
                    <ArticleIcon />
                  </ListItemIcon>
                  <ListItemText primary={e.text} />
                  {listOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={listOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {e.contents?.map((el) => (
                      <ListItemButton
                        onClick={() => {
                          navigate(e.path + el.path);
                          setOpen(false);
                        }}
                        sx={{ pl: 4 }}
                      >
                        <ListItemIcon>
                          <ArticleIcon />
                        </ListItemIcon>
                        <ListItemText primary={el.text} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem
                button
                key={e.text}
                onClick={() => {
                  navigate(e.path);
                  setOpen(false);
                }}
              >
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary={e.text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <Main open={open}></Main>
    </Box>
  );
};
