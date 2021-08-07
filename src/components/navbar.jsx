import React, { Component } from 'react';

//Stateless Functional Component
const Navbar = ({ totalCounters }) => {
	return ( 
		<nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
			</a>
            </div>
		</nav>
	 );
};
 
export default Navbar;


// class NavBar extends Component {
//     render() { 
//         return ( 
//           <nav className="navbar navbar-light bg-light">
//             <div className="container-fluid">
//               <a className="navbar-brand" href="#">
//                 Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//                 </a>
//             </div>
//           </nav> );
//     }
// }
 
// export default NavBar;