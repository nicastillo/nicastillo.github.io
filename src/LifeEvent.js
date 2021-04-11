import React from 'react';
import {Modal} from '@material-ui/core';
import { StarsRounded, AccountCircleRounded} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import './LifeEvent.css';

const LifeEvent = (props) => {
    function getModalStyle() {
        const top = 50;
        const left = 50;
      
        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }
    const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
    }));
    const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getICon = (eventType) => {
        switch (eventType) {
            
            case "school":
                return <AccountCircleRounded></AccountCircleRounded  >;
            default:
                console.log(eventType)
                return <StarsRounded></StarsRounded>;

        }
    }

    const modalBody = (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{props.details.title}</h2>
          <div className="modalWrapper">
            

            <img src={props.details.imagePath}/>

            <p id="simple-modal-description">
            {props.details.description}
            </p>
            <span>Next</span>
          </div>
        </div>
      );
    return (
        <div className="event">
            <div className="event-lifeline"></div>
            {getICon(props.details.category)}
            <span className="content" onClick={handleOpen}>{props.details.title}
            </span>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {modalBody}
            </Modal>

        </div>


    );
}

export default LifeEvent;