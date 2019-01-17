import React, { Component } from 'react';
import {Grid, Cell} from "react-mdl";

class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://media.licdn.com/dms/image/C4D03AQE5Wxpkz_Y8Pw/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=pHkS5VbGxWf6VEfaxN_PvOZmMlXgzPkja1fB_iGtA7g"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Full-stack Developer</h1>
                        <hr/>

                            <p>HTML/CSS | Bootstrap | Javascript | React | React Native | NodeJS | Express | MongoDB</p>

                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/janakan-nandakumaran/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                {/* Github */}
                                <a href="https://github.com/JanakanNan" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;