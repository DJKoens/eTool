import './PhaseItem.css';
import { Link } from 'react-router-dom';

const PhaeItemIntro = ({phaseId, progress}) => {
    return (
        <div className="phase" style={{
            background: (progress === 0) ? 'rgb(255, 65, 65)' : `linear-gradient(90deg, #59d85f ${Math.min(progress, 100)}%, rgb(255, 65, 65) ${Math.min(progress + 20, 100)}%)`
            }}>
            <Link to={`/tool/phase/${phaseId}/activity/0/step/0`} key={phaseId}>
                {/* <p>Phase {(phaseId === 7 || phaseId === 2) ? ((phaseId === 2) ? '2A' : '2B') : phaseId}</p> */}
                <p>Phase {phaseId}</p>
            </Link>
        </div>
    );
}
 
export default PhaeItemIntro;