import {NavLink} from 'react-router-dom';
import './ActivityNavigation.css';

const ActivityNavigation = ({phase, activities, activityHandler, currentActivity}) => {
    return (
        <div className="activityNavigation">
            {/* Extra phase button for phase 2A & 2B */}
            {/* {(phase == 2 || phase == 7) && <NavLink to={`/tool/phase/${phase}/activity/0/step/0`} style={
                ({isActive}) => {
                    return {
                        backgroundColor: isActive ? 'orange' : 'darkBlue'
                    }
                }
            } onClick={() => activityHandler(0)}>{(phase == 2) ? "Phase 2A" : "Phase 2B"}</NavLink>} */}
            
            {/* Activity Buttons */}
            {activities.map((activity) => (
                <NavLink to={`/tool/phase/${phase}/activity/${activity.id}/step/0`} style={
                    {
                        backgroundColor: (currentActivity === activity.id) ? 'orange' : ''
                    }
                } onClick={() => activityHandler(activity.id)} key={activity.id}>{activity.name}</NavLink>
            ))}
        </div>
    );
}

export default ActivityNavigation;