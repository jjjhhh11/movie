import styles from "./footer.module.css";
import { Link } from "react-router-dom";

export default function Footer(){

    return(
        <footer>
        <Link to="/">
            <div>
          <h2>MOVIE APP</h2>
          </div>
        </Link>
      </footer>
    );
}