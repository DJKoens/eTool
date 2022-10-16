import './ToolStart.css';
import PhaseStartItem from '../components/PhaseStartItem';
import Glossary from '../components/Glossary';
import ActivityNavigation from '../components/ActivityNavigation';
import useContent from '../useContent.js';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import StepNavigationBar from '../components/StepNavigation';
import RichTextRecursive from '../components/RichTextRecursive';

const ToolStart = () => {

    const {phaseId, activityId} = useParams();
    const [activity, setActivity] = useState(activityId);
    const [phaseUpdater, updatePhase] = useState(false);

    const phaseUpdate = () => {
        updatePhase(!phaseUpdater);
    }

    const query = `
    {
        phaseCollection(limit:7) {
          items{
            phaseId
            name
            subTitle
            generalIntroduction {
                json
            }
            glossaryCollection(limit:15) {
              items {
                glossaryItem
                info {
                    json
                }
              }
            }
            activitiesCollection(limit:8) {
              items {
                name
                subTitle
                id
                aim {
                    json
                }
                description {
                    json
                }
                stepsCollection {
                    items {
                        id
                        title
                        responsible
                        shortDescription {
                            json
                        }
                    }
                }
              }
            }
          }
        }
      }
    `;

    const {content, isPending, error} = useContent(query);

    const handleActivity = (newActivity) => {
        setActivity(newActivity);
    }

    return (
        <div className="toolStart">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && 
                <div className="startContent">
                    <div className="phases">
                        <PhaseStartItem activePhase={phaseId} phaseId={1} activityHandler={handleActivity} />
                        <PhaseStartItem activePhase={phaseId} phaseId={2} activityHandler={handleActivity} />
                        <PhaseStartItem activePhase={phaseId} phaseId={3} activityHandler={handleActivity} />
                        <PhaseStartItem activePhase={phaseId} phaseId={4} activityHandler={handleActivity} />
                        <PhaseStartItem activePhase={phaseId} phaseId={5} activityHandler={handleActivity} />
                        <PhaseStartItem activePhase={phaseId} phaseId={6} activityHandler={handleActivity} />
                    </div>

                    {content.data.phaseCollection.items.filter(phase => phase.phaseId == phaseId).map((phase) => (
                        <div className="introGloss" key={phase.phaseId}>
                            <h2 className='CardContainer subTitle'>{phase.subTitle}</h2>
                            <ActivityNavigation phase={phaseId} activities={phase.activitiesCollection.items} activityHandler={handleActivity} currentActivity={activity}/>
                            {(phaseId == 2 || phaseId == 7) && <div>
                                {/* Place an extra activity navigation item when there is a subphase needed */}
                                {content.data.phaseCollection.items.filter(phase => phase.phaseId == ((phaseId == 2) ? 7 : 2)).map((subPhase) => (
                                    <ActivityNavigation key={subPhase.phaseId} phase={subPhase.phaseId} activities={subPhase.activitiesCollection.items} activityHandler={handleActivity} />
                                ))}
                            </div>}
                            <hr />
                            {/* Check if there is an activity selected, if so show the activity information. Otherwise show the Phase information */}
                            {activity == 0 && <div>
                                <h3>General introduction:</h3>
                                <div>
                                    {phase.generalIntroduction.json.content.map((item, index) => (
                                        <RichTextRecursive {...item} key={index} />
                                    ))}
                                </div>
                                <hr />
                                <h3>Glossary</h3>
                                <Glossary glossaryItems={phase.glossaryCollection.items} />
                            </div>}
                            {activity != 0 && <div>
                                {phase.activitiesCollection.items.filter(a => a.id == activity).map((activity) => (
                                    <div key={activity.id}>
                                     <div className="activityContent">
                                        <h2>{activity.name}: {activity.subTitle}</h2>
                                        <h3>Aim: </h3>
                                        <div>{activity.aim.json.content.map((aim, index) => (
                                            <RichTextRecursive {...aim} key={index}/>
                                        ))}</div>
                                        <h3>Description: </h3>
                                        <div>{activity.description.json.content.map((description, index) => (
                                            <RichTextRecursive {...description} key={index}/>
                                        ))}</div>
                                        </div>

                                        <StepNavigationBar steps={activity.stepsCollection.items} phase={phase.phaseId} activity={activity.id} phaseUpdater={phaseUpdate}/>
                                    </div>
                                ))}
                            </div>}
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}
 
export default ToolStart;