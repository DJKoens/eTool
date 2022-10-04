import './Tool.css';
import Resources from '../components/Resources';
import useFetch from '../useFetch.js';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import PhaseItem from '../components/PhaseItem';
import StepNavigationBar from '../components/StepNavigation';

const Tool = () => {
    const {phaseId, activityId} = useParams();
    const [activity, setActivity] = useState(activityId);
    const [checkProgress, setCheckProgress] = useState(0);
    const {data, isPending, error} = useFetch('http://localhost:8000/phases');

    const query = `
    {
        phaseCollection {
          items{
            phaseId
            activitiesCollection(limit:5) {
              items {
                name
                id
              }
            }
          }
        }
      }
    `;
    
    let maxProgress = 0;
    if (data && maxProgress === 0) {
        data[phaseId].activities.map((a) => (
            a.checklist.map((c) => (
                maxProgress += c.questions.length
            ))
        ))
    }

    const handleActivity = (newActivity) => {
        setActivity(newActivity)
    }

    const checkHandler = (progress, max) => {
        setCheckProgress(Math.floor(progress*1.0 / maxProgress * 100.0));
    }

    return (
        <div className='Tool'>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}

            {data && <div className='toolContent'>
            <div className="phases">
                <PhaseItem linkTo={"/phase/0/activity/0/step/0"} phaseId={1} progress={checkProgress} resetActivity={handleActivity}/>
                <PhaseItem linkTo={"/phase/1/activity/0/step/0"} phaseId={2} progress={0} resetActivity={handleActivity} />
                <PhaseItem linkTo={"/phase/2/activity/0/step/0"} phaseId={3} progress={0} resetActivity={handleActivity} />
                <PhaseItem linkTo={"/phase/3/activity/0/step/0"} phaseId={4} progress={0} resetActivity={handleActivity} />
                <PhaseItem linkTo={"/phase/4/activity/0/step/0"} phaseId={5} progress={0} resetActivity={handleActivity} />
                <PhaseItem linkTo={"/phase/5/activity/0/step/0"} phaseId={6} progress={0} resetActivity={handleActivity} />
            </div>

                <h2>{data[phaseId].activities[activity].name}</h2>
                <h3>Aim:</h3>
                <p>{data[phaseId].activities[activity].aim}</p>
                <h3>Description:</h3>
                <p>{data[phaseId].activities[activity].description}</p>

                <hr />

                <StepNavigationBar steps={data[phaseId].activities[activity].steps} phase={phaseId} activity={activity} checklist={data[phaseId].activities[activity].checklist} checkHandler={checkHandler}/>

                <h2>Resources</h2>
                <Resources />
            </div>
            }
        </div>
    );
}
 
export default Tool;