import React from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.min.css";
import {Routes, Route, useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.css';
import "../css/menu.css";
import DropList from "./DropList.jsx";

function Menu() {
  const history = useNavigate();
  
  return (
    <>
      <SideNav
        onSelect={(selected) => {
          history(selected);
        }}
        style={{background: "blue"}}
      >
        {/* fa fa-fw fa-address-book */}
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i
                className="fa fa-fw fa-address-book"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText>DropList</NavText>
            <NavItem eventKey="/">
              <NavText>Todos</NavText>
            </NavItem>
            <NavItem eventKey="/mob">
                <NavText>Monstros</NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
      <Routes>
        <Route path="/" element={<DropList />} />
      </Routes>
    </>
  );
}

export default Menu;
