import {Link} from "react-router-dom";
import icoshape from './images/arrow.svg';
import './css/style.css';

function ButtonTrans({text, url}) {
  return (
    <Link className="vm_trans" to={url}>{text} <img src={icoshape} alt="{text}"></img></Link>
    );
}

export default ButtonTrans;