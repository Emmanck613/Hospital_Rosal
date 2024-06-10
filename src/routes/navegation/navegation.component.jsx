import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import {ReactComponent as HospitalLogo } from '../../assest/banner6.png';

import './navigation.styles.css';

const Navigation = () => {

    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <HospitalLogo className="logo"></HospitalLogo>
            </Link>
            
            <div className="nav-links-container">
                <Link className="nav-link" to='/estudios '>
                    ESTUDIOS
                </Link>

                <Link className="nav-link" to='/especialidades '>
                    ESPECIALIDADES
                </Link>

                <Link className="nav-link" to='/promociones '>
                    PROMOCIONES
                </Link>

                <Link className="nav-link" to='/farmacia '>
                    FARMACIA
                </Link>

                <Link className="nav-link" to='/soporte-tecnico '>
                    SOPORTE TÉCNICO
                </Link>
                
            </div>

        </div>
        <Outlet/>
      </Fragment>
    );
  };

  export default Navigation;