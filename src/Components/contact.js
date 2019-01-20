import React, { Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Janakan Nandakumaran</h2>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Teko'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (0033) 6-20-29-35-60
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Teko'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    janakan1101@gmail.com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Teko'}}>
                                    <i className="fa fa-skype" aria-hidden="true"/>
                                    janakan11
                                </ListItemContent>
                            </ListItem>
                        </List>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;