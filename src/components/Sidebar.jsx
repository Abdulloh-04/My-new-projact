import React, { useState } from "react";
import {FaBars, FaRegChartBar, FaClinicMedical, FaEnvelope,FaCommentAlt,FaClipboardList} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
    {
        path:"/",
        name:"Main menu",
        icon:<FaClinicMedical/>
    },
    {
        path:"/registration",
        name:"registration",
        icon:<FaClipboardList/>
    },
    {
        path:"/analistic",
        name:"Analistic",
        icon:<FaRegChartBar/>
    },
    {
        path:"/comment",
        name:"Comment",
        icon:<FaCommentAlt/>
    },
    {
        path:"/login",
        name:"Login",
        icon:<FaEnvelope/>
    },
    ]
    return(
        <div className="container1">
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="fix">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Clinic</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0"}} className="bars"><FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className='link' activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;