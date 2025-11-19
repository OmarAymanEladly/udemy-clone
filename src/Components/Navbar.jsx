function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
          <h2 className="logo">Udemy</h2>
          <div className="categories">Categories</div>
        </div>
        
        <div className="nav-center">
          <div className="search-bar">
            <input type="text" placeholder="Search for anything" />
            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        
        <div className="nav-right">
          <div className="nav-item">Plans & Pricing</div>
          <div className="nav-item">Udemy Business</div>
          <div className="nav-item">Teach on Udemy</div>
          <div className="nav-icon">
            <i className="fas fa-shopping-cart"></i>
          </div>
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;