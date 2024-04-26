import {Link} from "react-router-dom";
import icoshape from './images/ico-shape.svg';
import './css/style.css';

function Button({text, url}) {
  return (
    <Link className="vm" to={url}>{text} <img src={icoshape} alt="{text}"></img></Link>
    );
}

export default Button;