import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import * as styles from './header.module.css'

const Header = () => (
  <header
    style={{
      background: `rgb(0, 83, 155)`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}> 
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Alex McDowell - Master's Dissertation
        </Link>
      </h1>
      <br/>
      <div>
        <Link className={styles.link} to="/">Home</Link>
        <Link className={styles.link} to="/upTimePage/">Up Time</Link>
        <Link className={styles.link} to='/plants/'>Plants</Link>
      </div>
    </div>
    
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
