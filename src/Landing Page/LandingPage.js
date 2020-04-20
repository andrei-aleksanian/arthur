import React, {Component} from 'react';
import Arthur from '../assets/Arthur.JPG';
import classes from './LandingPage.module.css';
import chemistryImage from '../assets/chemistry.jpg';

class LandingPage extends Component {

    render(){
        return (
            <div >
                <div className={classes.Welcome}>
                    <div className={classes.BackDrop}></div>
                    <img className={classes.BackgroundImage} src={Arthur} alt="Arthur"/>
                    <div className={classes.Logo}>
                        <h1>Arthur Purser</h1>
                        <p className={classes.p}>-What's up G. Wisdom of the ancient...</p>
                    </div>
                </div>
                <div className={classes.Wrapper}>
                    <h2 className={classes.Skills}>My outstanding experience</h2>
                    <div className={classes.Chemistry}>
                        <div className={classes.ChemistryTxtDiv}>
                            <h2>Chemistry</h2>
                            <p className={classes.Text}>Chemistry is the scientific discipline involved with elements and compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.</p>
                        </div>
                        <div className={classes.ChemistryImgDiv}>
                            <img src={chemistryImage} alt={"chem stuff"}/>
                        </div>
                    </div>

                    <div className={classes.Chemistry}>
                        <div className={classes.ChemistryImgDiv}>
                            <img src={chemistryImage} alt={"chem stuff"}/>
                        </div>
                        <div className={classes.ChemistryTxtDiv}>
                            <h2>Chemistry</h2>
                            <p className={classes.Text}>Chemistry is the scientific discipline involved with elements and compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.</p>
                        </div>
                    </div>

                    <h2 className={classes.Skills}>Meet my lawn mower</h2>
                    <div className={classes.Chemistry}>
                        <div className={classes.ChemistryTxtDiv}>
                            <h2>Chemistry</h2>
                            <p className={classes.Text}>Chemistry is the scientific discipline involved with elements and compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.</p>
                        </div>
                        <div className={classes.ChemistryImgDiv}>
                            <img src={chemistryImage} alt={"chem stuff"}/>
                        </div>
                    </div>
                    <div className={classes.Chemistry}>
                        <div className={classes.ChemistryImgDiv}>
                            <img src={chemistryImage} alt={"chem stuff"}/>
                        </div>
                        <div className={classes.ChemistryTxtDiv}>
                            <h2>Chemistry</h2>
                            <p className={classes.Text}>Chemistry is the scientific discipline involved with elements and compounds composed of atoms, molecules and ions: their composition, structure, properties, behavior and the changes they undergo during a reaction with other substances.</p>
                        </div>
                    </div>
                </div>
                <footer className={classes.footer}>
                    <p>Email Me - artpurser96@gmail.com</p>
                </footer>
            </div>



        );
    }
}

export  default LandingPage;