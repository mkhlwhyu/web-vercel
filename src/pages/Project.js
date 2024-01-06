import "./constyle.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Route, Link } from "react-router-dom";
import Mikhael from "./utils/mikhael";
import iglogo from "./iglogo.png";
import Zalu from "./utils/zaluansyah";
import Bori from "./utils/bori";
import Yohanes from "./utils/yohanes";
import Wahyu from "./utils/wahyu";

const card = (
<React.Fragment>
    <div className="fragment">

    <CardContent>
    {/* <Typography sx={{ fontSize: 16 }} color="#1d1d1d" gutterBottom>
        Word of the Day
    </Typography> */}
    <Typography variant="h5" component="div">
        Mikhael Wahyu 
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="#1d1d1d">
        Junior Front-End Developer
    </Typography>
    <Typography variant="body2">
        
        <br />
        <div className="logowrapper">
        <img className="logo" src={iglogo} alt='iglo'/>{'@mkhlwhyu'}
        </div>
    </Typography>
    </CardContent>
    <div className="btn">
    <CardActions>
        <Route>
        <Link to='/Mikhael' path={Mikhael}>
            <Button size="small">Learn More</Button>
        </Link>
        </Route>
    </CardActions>
    </div>
    </div>

    <div className="fragment">
    <CardContent>
    {/* <Typography sx={{ fontSize: 16 }} color="#1d1d1d" gutterBottom>
        Word of the Day
    </Typography> */}
    <Typography variant="h5" component="div">
        Muhammad Zaluansyah
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="#1d1d1d">
        Junior Back-End Developer
    </Typography>
    <Typography variant="body2">
        
        <br />
        <div className="logowrapper">
        <img className="logo" src={iglogo} alt='iglo'/>{'@muzalx'}
        </div>
    </Typography>
    </CardContent>
    <div className="btn">
    <CardActions>
        <Route>
        <Link to='/Zaluansyah' path={Zalu}>
            <Button size="small">Learn More</Button>
        </Link>
        </Route>
    </CardActions>
    </div>
    </div>

    <div className="fragment">
    <CardContent>
    {/* <Typography sx={{ fontSize: 16 }} color="#1d1d1d" gutterBottom>
        Word of the Day
    </Typography> */}
    <Typography variant="h5" component="div">
        Ahmad Buhori 
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="#1d1d1d">
        
    </Typography>
    <Typography variant="body2">
        
        <br />
        <div className="logowrapper">
        <img className="logo" src={iglogo} alt='iglo'/>{'@ahmd_bhri'}
        </div>
    </Typography>
    </CardContent>
    <div className="btn">
    <CardActions>
        <Link to='/Buhori' path={Bori}>
            <Button size="small">Learn More</Button>
        </Link>
    </CardActions>
    </div>
    </div>

    <div className="fragment">
    <CardContent>
    {/* <Typography sx={{ fontSize: 16 }} color="#1d1d1d" gutterBottom>
        Word of the Day
    </Typography> */}
    <Typography variant="h5" component="div">
        Yohanes Setiawan 
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="#1d1d1d">
        
    </Typography>
    <Typography variant="body2">
        
        <br />
        <div className="logowrapper">
        <img className="logo" src={iglogo} alt='iglo'/>{'@yohanes_set'}
        </div>
    </Typography>
    </CardContent>
    <div className="btn">
    <CardActions>
        <Link to='/Yohanes' path={Yohanes}>
            <Button size="small">Learn More</Button>
        </Link>
    </CardActions>
    </div>
    </div>

    <div className="fragment">
    <CardContent>
    {/* <Typography sx={{ fontSize: 16 }} color="#1d1d1d" gutterBottom>
        Word of the Day
    </Typography> */}
    <Typography variant="h5" component="div">
        Wahyu Agus Setiawan
    </Typography>
    <Typography sx={{ mb: 1.5 }} color="#1d1d1d">
        Full-stack Web Dev
    </Typography>
    <Typography variant="body2">
        
        <br />
        <div className="logowrapper">
        <img className="logo" src={iglogo} alt='iglo'/>{'@wahyuags_'}
        </div>
    </Typography>
    </CardContent>
    <div className="btn">
    <CardActions>
        <Link to='/Wahyu' path={Wahyu}>
            <Button size="small">Learn More</Button>
        </Link>
    </CardActions>
    </div>
    </div>

</React.Fragment>

);

export default function OutlinedCard() {
return (
    <Box sx={{ minWidth: 175 }} color="#1d1d1d">
    <Card variant="outlined">{card}</Card>
    </Box>
);
}