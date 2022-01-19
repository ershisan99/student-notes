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
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ArticleIcon from "@mui/icons-material/Article";
import { useNavigate } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  alpha,
  Collapse,
  Fab,
  InputBase,
  ListItemButton,
  useScrollTrigger,
  Zoom,
} from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { toggleTheme } from "../theme/themeSlice";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,

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

function ScrollTop({ children }: any) {
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

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

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar position="static" open={open}>
        <Toolbar id="back-to-top-anchor">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            size="large"
            sx={{
              mr: 2,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            sx={{ ml: 1, justifySelf: "flex-end" }}
            onClick={() => dispatch(toggleTheme())}
            color="inherit"
          >
            {theme.darkTheme ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          {/*<Search>*/}
          {/*  <SearchIconWrapper>*/}
          {/*    <SearchIcon />*/}
          {/*  </SearchIconWrapper>*/}
          {/*  <StyledInputBase*/}
          {/*    placeholder="Search…"*/}
          {/*    inputProps={{ "aria-label": "search" }}*/}
          {/*  />*/}
          {/*</Search>*/}
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
        variant="temporary"
        onClose={handleDrawerClose}
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
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
};
