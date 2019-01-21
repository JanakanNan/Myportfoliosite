 import React, { Component } from 'react';
import {Grid, Cell} from "react-mdl";
 import Education from "./education";
 import Experience from "./experience";
 import Skills from "./skills";

 class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{height: '200px'}}
                                />
                        </div>
                        <h2 style={{paddingTop: '2em'}}> Janakan Nandakumaran</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50PX'}}/>
                        <h5>Adress</h5>
                        <p>1 Hacker Way Menlo Park, 77340</p>
                        <h5>Phone</h5>
                        <p>(00 35)620293560</p>
                        <h5>Email</h5>
                        <p>janakan1101@gmail.com</p>
                        <h5>Web</h5>
                        <p>janakanNandakumaran.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        {/* Education 1 */}
                        <Education
                            startYear={2012}
                            endYear={2014}
                            schoolName="EFREI"
                            schoolDescription="L'EFREI Paris, est l'une des 207 écoles d'ingénieurs françaises accréditées au 1ᵉʳ septembre 2017 à délivrer un diplôme d'ingénieur. Le titre d'ingénieur est délivré depuis 1957 ; depuis 1973 il est « Ingénieur de l'École française d'électronique et d'informatique"
                        />
                        {/* Education 2 */}
                        <Education
                            startYear={2014}
                            endYear={2017}
                            schoolName="BTS SIO option SLAM"
                            schoolDescription="Ce technicien supérieur dialogue en permanence avec les informaticiens de l'entreprise et les collaborateurs extérieurs (fournisseurs de matériel, prestataires de services...). Par ailleurs, il exerce des fonctions d'interface entre les utilisateurs, le service informatique central, les gestionnaires et les décideurs. Ses champs de compétence recouvrent la création d'applications, l'intégration de progiciels de gestion, l'installation et la configuration de micro-ordinateurs, de réseaux et de systèmes client-serveur, ainsi que la formation des utilisateurs finaux."
                        />
                        <hr style={{borderTop: '3px solid #e22847'}}/>

                        <h2>Experience</h2>
                        {/* Experience 1 */}
                        <Experience
                            startYear={2015}
                            endYear={2017}
                            jobName="Ministère de l'intérieur"
                            jobDescription="Intégrateur d'application"
                        />

                        {/* Experience 2 */}
                        <Experience
                            startYear={2017}
                            endYear={2020}
                            jobName="Ministère de l'intérieur"
                            jobDescription="Developpeur full-stack"
                        />

                        <hr style={{borderTop: '3px solid #e22847'}}/>

                        <h2>Skills</h2>

                        <Skills
                            skill="Java"
                            progress={60}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;