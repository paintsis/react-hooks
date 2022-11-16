import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light rounde-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">useContext</Link>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
    <NavLink to="/" className={ ({ isActive })=> ` nav-link ${ isActive ? 'active' : ''}`  }> Home </NavLink>
    <NavLink to="/about" className={ ({ isActive })=> ` nav-link ${ isActive ? 'active' : ''}`  }> About </NavLink>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
