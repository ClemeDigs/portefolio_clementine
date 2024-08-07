
import "animate.css";
import WOW from "wow.js";
import "./change_theme";
import Projet from "./Projet";
import projets from "./projets";
import "./handle_scroll";
import "./filters";
import "./change_project";


new WOW().init();

const projetsGrid = document.querySelector('.projets-grid');

projets.forEach(projet => {
    projetsGrid.appendChild(projet.toGridHtml());
    projetsGrid.appendChild(projet.toDetailHtml());
})

