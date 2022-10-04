import './PhaseItem.css';
import { Link } from 'react-router-dom';

const PhaseStartItem = ({phaseId, progress, activityHandler}) => {
    return (
        <div className="phase" style={{
            background: (progress === 0) ? 'rgb(255, 65, 65)' : `linear-gradient(90deg, #59d85f ${Math.min(progress, 100)}%, rgb(255, 65, 65) ${Math.min(progress + 20, 100)}%)`
            }}>
            <Link to={`/tool/phase/${phaseId}/activity/0/step/0`} key={phaseId} onClick={() => activityHandler(0)}>
                <p>Phase {phaseId}</p>
            </Link>
        </div>
    );
}
 
export default PhaseStartItem;