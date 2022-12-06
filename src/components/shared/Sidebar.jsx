const Sidebar = () => {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div className="sb-sidenav-menu">
            <div className="nav">
            <div className="sb-sidenav-menu-heading">Core</div>
            <a className="nav-link" href="index.html">
                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
                Dashboard
            </a>
            
            </div>
        </div>
        <div className="sb-sidenav-footer">
            <div className="small">Logged in as:</div>
            Start Bootstrap
        </div>
    </nav>

  )
}

export default Sidebar