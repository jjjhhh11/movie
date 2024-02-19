import { Link } from "react-router-dom";
import icHamburger from "../assets/hamburger.svg";
import icMyPage from "../assets/ic_myPage.svg";
import styles from "./header.module.css"
function Header(){
    return(
        <div className={styles.header_container}>
        <Link to="/">
          <div className={styles.img_logo}><h1>MOVIE APP</h1></div>
        </Link>
        <div className={styles.gnb_container}>
          <div className={styles.mainNav_container}>
            <ul>
              <li>영화</li>
              <li>예매</li>
              <li>극장</li>
              <li>이벤트</li>
            </ul>
          </div>
          <div className={`${styles.menu_hamburger} ${styles.menu_option}`}><img src={icMyPage} /></div>
          <div className={`${styles.menu_myPage} ${styles.menu_option}`}><img src={icHamburger} /></div>
        </div>
      </div>
    )
}

export default Header;