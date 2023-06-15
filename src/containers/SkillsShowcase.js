import React, { useState, useEffect } from 'react';

import "./css/SkillsShowcase.css";
import Background from '../assets/images/skills-showcase-background.png';
import ReactLogo from '../assets/images/logo-react-icon.png';
import PythonLogo from '../assets/images/python-logo.png';
import JavascriptLogo from '../assets/images/JavaScript-Logo.png';
import DockerLogo from '../assets/images/docker-logo.png';
import ReduxLogo from '../assets/images/react-redux-logo.png'
import PostgresLogo from '../assets/images/PostgreSQL-logo.png';
import MaterialUILogo from '../assets/images/material-ui-logo.png';
import DjangoLogo from '../assets/images/django-logo.jpg'



const SkillShowcase = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        // Function to load the initial state
        const loadInitialState = async () => {
          try {
            // Make an API call or perform any asynchronous task to fetch the initial state
            const response = await fetch('https://api.example.com/state');
            const data = await response.json();
            setState(data); // Update the state with the fetched data
          } catch (error) {
            console.error('Error loading initial state:', error);
          }
    };

    loadInitialState(); // Call the function to load the initial state
  }, []);

    return (
        <div className='container-skills'>
            <div className='transition-block-skill-top'></div>
            <div className='grid-skill timeline'>
                    <div className='container-1 left'>
                        <div className='container-1-child'>
                            <img className='skill-logo' src={JavascriptLogo} alt='js-logo'></img>
                            <p>test</p>
                        </div>
                    </div>

                    <div className='middle-colum'>
                    </div>

                    <div className='empty-right'></div>

                    <div className='empty-right'></div>

                    <div className='middle-colum'>
                    </div>

                    <div className='container-1 right'>
                        <img className='skill-logo' src={PythonLogo} alt='python-logo'></img>
                    </div>

                    <div className='container-1 left'>
                        <img className='skill-logo' src={ReactLogo} alt='react-logo'></img>
                    </div>

                    <div className='middle-colum'>
                    </div>

                    <div className='empty-right'></div>

                    <div className='empty-right'></div>

                    <div className='middle-colum'>
                    </div>

                    <div className='container-1 right'>
                        <img className='skill-logo' src={DockerLogo} alt='docker-logo'></img>
                    </div>

                    <div className='container-1 left'>
                        <img className='skill-logo' src={ReduxLogo} alt='redux-logo'></img>
                    </div>

                    <div className='middle-colum'>
                    </div>

                    <div className='empty-right'></div>

                    <div className='empty-right'></div>

                    <div className='middle-colum'>
                    </div>

                    <div className='container-1 right'>
                            <img className='skill-logo' src={PostgresLogo} alt='postgres-logo'></img>
                    </div>

                    <div className='container-1 left'>
                        <img className='skill-logo' src={MaterialUILogo} alt='material-ui-logo'></img>
                    </div>

                    <div className='middle-colum'>
                    </div>

                    <div className='empty-right'></div>

                    <div className='empty-right'></div>

                    <div className='middle-colum'>
                    </div>

                    <div className='container-1 right'>
                        <img className='skill-logo' src={DjangoLogo} alt='django-logo'></img>
                    </div>
            </div>
            <div className='transition-block-skill-top'></div>
            <div className='transition-block-4'></div>
        </div>
    )
};

export default SkillShowcase;