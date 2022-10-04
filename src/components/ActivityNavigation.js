import {NavLink} from 'react-router-dom';
import './ActivityNavigation.css';

const ActivityNavigation = ({phase, activities, activityHandler}) => {
    return (
        <div className="activityNavigation">
            {activities.map((activity) => (
                <NavLink to={`/tool/phase/${phase}/activity/${activity.id}/step/0`} style={
                    ({isActive}) => {
                        return {
                            backgroundColor: isActive ? 'orange' : ''
                        }
                    }
                } onClick={() => activityHandler(activity.id)}>{activity.name}</NavLink>
            ))}
        </div>
    );
}

export default ActivityNavigation;