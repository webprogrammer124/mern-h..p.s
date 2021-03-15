import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {IoMdArrowRoundBack} from 'react-icons/io'
import {IoMdArrowRoundForward} from 'react-icons/io'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
}));

export default function GlobalHeader({forward, back, title, btn}) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
                <IoMdArrowRoundBack onClick={back}/>
            </IconButton>
            <div style={{textAlign:'center', marginLeft:'45%'}}>
            <Typography className={classes.title} variant="h6">
            { title }
          </Typography>
            </div>
          <div className={classes.grow} />
          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <IoMdArrowRoundForward onClick={forward}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}