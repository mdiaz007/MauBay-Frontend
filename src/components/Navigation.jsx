function Navigation(props) {

  if (props.status == "None"){

    return (

      <>
        <div className="navigation">
          <div className="navigation_left">
            <a href="/" className="navigation_home">Home</a>
            <a href="/marketplace" className="navigation_marketplace">Marketplace</a>
          </div>
          <div className="navigation_center">
            <img src="src/assets/logo.png" alt="maubay" />
          </div>
          <div className="navigation_right">
            <a href="/cart" className="navigation_cart">Cart</a>
            <a href="/auth" className="navigation_login_signup">Login/Sign Up</a>
          </div>
        </div>
      </>
    )

  }else{

    return (
      <>
        <div className="navigation">
          <div className="navigation_left">
            <a href="/" className="navigation_home">Home</a>
            <a href="/marketplace" className="navigation_marketplace">Marketplace</a>
          </div>
          <div className="navigation_center">
            <img src="src/assets/logo.png" alt="maubay" />
          </div>
          <div className="navigation_right">
            <a href="/cart" className="navigation_cart">Cart</a>
            <a href="/dashboard" className="navigation_login_signup">{props.status}</a>
          </div>
        </div>
      </>
    )

  }

  
}

export default Navigation
