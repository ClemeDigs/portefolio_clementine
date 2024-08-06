
import "animate.css";
import WOW from "wow.js";
import "./change_theme";
import Projet from "./Projet";
import projets from "./projets";
import "./handel_scroll";
import "./filters";
import "./dialog";


new WOW().init();

const projetsGrid = document.querySelector('.projets-grid');

projets.forEach(projet => {
    projetsGrid.appendChild(projet.toGridHtml());
})

