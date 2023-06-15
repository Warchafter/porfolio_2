import React, { useEffect, useRef } from "react";

import "./css/ProjectShowcase.css";
import { projList } from "../components/projectShowcaseList";

const ProjectShowcase = () => {
    const panelsRef = useRef([]);

    useEffect(() => {
    const panels = panelsRef.current;

    const activeHandlerPanels = () => {
        panels.forEach((panel) => {
        panel.addEventListener("click", () => {
            removeActiveClasses();
            panel.classList.add("active");
        });
        });
    };

    const removeActiveClasses = () => {
        panels.forEach((panel) => {
        panel.classList.remove("active");
        });
    };

    activeHandlerPanels();
    }, []);

    return (
    <div className="component">
        <div className="transition-block-1"></div>
        <div className="container">
        {projList.map((item, index) => (
            <div
                key={item.name}
                ref={(el) => (panelsRef.current[index] = el)}
                className={`panel ${index === 0 ? "active" : ""}`}
                style={{ backgroundImage: `url(${item.url})` }}
            >
            <h3>{item.title}</h3>
            </div>
        ))}
        </div>
        <div className="transition-block-2"></div>
    </div>
    );
};

export default ProjectShowcase;