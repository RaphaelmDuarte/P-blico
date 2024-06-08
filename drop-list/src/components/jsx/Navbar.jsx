import "../css/navbar.css"
import React from "react";
import Link from "./Link";

const Navbar = (props) => {

    const handleButton = () => {
        let navWidth = document.getElementById("navbar").style.width;
        if (navWidth === "240px") {
            document.getElementById("navbar").style.width = "64px";
        } else {
            document.getElementById("navbar").style.width = "240px";
        }
    };

    return (
        <div id="navbar">
            <Link id={"monstros"} referencia={"/mob"} title={"Monstros"} />
            <Link id={"itens"} referencia={"/itens"} title={"Itens"} />
            <Link id={"list"} referencia={"/"} title={"Droplist"} />
            <button onClick={e => handleButton()} ></button>
        </div>
    );
};

export default Navbar;