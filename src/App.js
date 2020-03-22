import React from "react";
import logo from "./logo.svg";
import CakeIcon from '@material-ui/icons/Cake';
import "./App.css";
import Username from "./components/Username";
import ListeHobbies from "./components/ListeHobbies";
import Photos from "./components/Photos";
import { BrowserRouter, Route, Link } from "react-router-dom";
import List from '@material-ui/core/List';
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/GroupeRock";
import Album from "./components/Album";
import Members from "./components/Members";
import { makeStyles,withStyles,fade } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import InfoIcon from '@material-ui/icons/Info';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import metallica from "./data/mettalica";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Card from '@material-ui/core/Card';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';




const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  lists: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color:'#fff',
    fontFamily:'Arial',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    marginLeft:100,
    textAlign:'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

 
function App() {
 
 
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  return (
    <div className="App">
         <BrowserRouter>
         <AppBar  position="static">
        <Toolbar className="AppBar">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title}  variant="h6" noWrap>
          {metallica.name}
            
          </Typography>
            <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}


        <Grid container spacing={2} >
        
        <Grid  item xs={2} >
          <Paper  className="list">
          <List className="list" component="nav" aria-label="main mailbox folders">
        <ListItem  button >
          <ListItemIcon >
          <Link to="/" className="link" ><HomeIcon  className="link"/></Link>
          </ListItemIcon>
          <Link to="/" className="link" ><ListItemText primary="Home" /> </Link>
         </ListItem>
        <ListItem button>
          <ListItemIcon>
          <Link to="/rock" className="link"><GroupWorkIcon className="link"/></Link>
          </ListItemIcon>
          <Link to="/rock" className="link"> <ListItemText primary="Groupe Rock" /></Link>
        </ListItem>
        <ListItem button>
        <ListItemIcon>
          <Link to="/members" className="link"><PeopleAltIcon className="link" /></Link>
          </ListItemIcon>
          <Link to="/members" className="link"> <ListItemText primary="Members" /></Link>
        </ListItem>
         <ListItem button>
        <ListItemIcon>
          <Link to="/album" className="link"><PhotoAlbumIcon className="link" /></Link>
          </ListItemIcon>
          <Link to="/album" className="link"> <ListItemText primary="Album" /></Link>
        </ListItem>
         <ListItem button>
        <ListItemIcon>
          <Link to="/ui" className="link"><DraftsIcon className="link" /></Link>
          </ListItemIcon>
          <Link to="/ui" className="link"> <ListItemText primary="About" /></Link>
        </ListItem>
      </List>
      <Divider />
      
          </Paper>
        </Grid>
        
        
        <Grid item xs={7}>
        <Card>
          <Typography style={{ color:'#0f010f',fontFamily: '"Arial Black", Gadget, sans-serif',fontSize:40}} >
              <MusicVideoIcon/>{metallica.name}
          </Typography>

        </Card>
        <hr/>
        <Paper className={classes.paper}>
                  <Route exact path="/" component={GroupeRock}></Route>
                  <Route path="/rock" component={GroupeRock} />
                  <Route path="/ui" component={TestMaterialUI}></Route>
                  <Route path="/members" component={Members}></Route>
                  <Route path="/album" component={Album}></Route>
        </Paper>
        
        </Grid>
        <Grid item xs={3}>
            <Paper className={classes.paper}>
              <List className={classes.root}>
              <img src={metallica.picture.medium} width='200'/>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor:'#f55e27'}}><CakeIcon style={{color: '#ffffff'}}/></Avatar>
                  </ListItemAvatar>
                <ListItemText
                primary="Birthdate"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {metallica.lifeSpan.begin}
                    </Typography>
                    {" "}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
              <Avatar style={{backgroundColor:'#0caab0'}}><LocationCityIcon style={{color: '#ffffff'}}/></Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Location"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {metallica.locationInfo.join(' - ')}
                    </Typography>
                   
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar style={{backgroundColor:'#a6bf43'}}>G</Avatar> 
              </ListItemAvatar>
              <ListItemText
                primary="Genre"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {metallica.genres.join(' - ')}
                    </Typography>
                    {''}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor:'#ebca52'}}>GD</Avatar>
                  </ListItemAvatar>
                <ListItemText
                primary="Genre(DBpedia)"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {metallica.dbp_genre.join(' - ')}
                    </Typography>
                    {" "}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor:'#f57153'}}><TextFieldsIcon style={{color: '#ffffff'}}/></Avatar>
                  </ListItemAvatar>
                <ListItemText
                primary="Label"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {metallica.labels.join(' - ')}
                    </Typography>
                    {" "}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ExpansionPanel>
        <ExpansionPanelSummary style={{backgroundColor: '#8d73f5',color:'white'}}
          expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>More Information</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          
            <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar style={{backgroundColor:'#f77486'}} >LD</Avatar>
                  </ListItemAvatar>
                <ListItemText
                primary="Label (DBpedia)"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {metallica.recordLabel.join(' - ')}
                    </Typography>
                    {" "}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <Avatar style={{backgroundColor:'#f58931'}} >N</Avatar>
                  </ListItemAvatar>
                <ListItemText
                primary="Number of Deezer fans"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {metallica.deezerFans}
                    </Typography>
                    {" "}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                  <Avatar style={{backgroundColor:'#4dc4e8'}} >A</Avatar>
                  </ListItemAvatar>
                <ListItemText
                primary="Associated artist(s)"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {metallica.associatedMusicalArtist.join(' - ')}
                    </Typography>
                    {" "}
                  </React.Fragment>
                }
              />
            </ListItem>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      
       
            
          </List>
          </Paper>
        </Grid>
      </Grid>
      <Route path="/photos/:id" component={Photos}></Route>
      <Route
          path="/username"
          component={() => <Username name="Michel" age="54" />}
        />
       
      </BrowserRouter>


    </div>
  );
}

export default App;
