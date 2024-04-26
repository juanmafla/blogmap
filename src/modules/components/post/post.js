import egypt from './images/egypt.jpg';
import ButtonTrans from '../button_trans/button_trans';
import './css/style.css';

function Post() {
  return (
        <div className="postblock">
                <div className="posthover p-4">
                    <div>
                        <h3>CAR Project</h3>
                        <ButtonTrans text={'View More'} url={'/article'}></ButtonTrans>
                    </div>
                </div>
                <img className="img-fluid" src={egypt} alt="Post"></img>
        </div>
  );
}

export default Post;