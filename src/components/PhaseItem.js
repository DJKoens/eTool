import './PhaseItem.css';
import { Link } from 'react-router-dom';

const PhaseItem = ({linkTo, phaseId, progress, resetActivity}) => {
    return (
        <div className="phase" style={{
            background: (progress === 0) ? 'rgb(255, 65, 65)' : `linear-gradient(90deg, #59d85f ${Math.min(progress, 100)}%, rgb(255, 65, 65) ${Math.min(progress + 20, 100)}%)`
            }}>
            <Link to={linkTo} key={phaseId} onClick={() => resetActivity(0)}>
                <p>Phase {phaseId}</p>
            </Link>
        </div>
    );
}
 
export default PhaseItem;