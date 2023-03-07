import React from "react";

import "./css/ProjectShowcase.css";
import { projList } from "../components/projectShowcaseList";

const panels = document.querySelectorAll('.panel');

const removeActiveClasses = () => {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
};


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
});

const ProjectShowcase = () => {
    return (
        <div className="component">
            <div className="transition-block-1">

            </div>
            <div className="container">
                {
                    projList.map((item, index) =>  {
                        console.log('item: ', item, index);
                        return (<div
                                    key={item.name}
                                    className={`panel ${index === 0 ? 'active' : ''}`}
                                    style={{backgroundImage: `url(${item.url})`}}>
                                    <h3>{item.title}</h3>
                                </div>
                            )
                    })
                }
            </div>
            <div className="transition-block-2">
            </div>
        </div>
    );
};

export default ProjectShowcase;