import React from 'react';

import './Header.scss';

const Header = () => {
   return (
     <header className="Header">
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mr-auto">
             <li className="nav-item active">
               <a className="nav-link" href="#">
                 Welcome to E-Cart <span className="sr-only">(current)</span>
               </a>
             </li>
           </ul>
         </div>
       </nav>
     </header>
   );
 }

export default Header;