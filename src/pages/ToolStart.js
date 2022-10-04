import './ToolStart.css';
import PhaseStartItem from '../components/PhaseStartItem';
import StepContent from '../components/StepContent';
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
    // const [step, setStep] = useState(stepId);

    const query = `
    {
        phaseCollection(limit:6) {
          items{
            phaseId
            name
            subTitle
            generalIntroduction {
                json
            }
            glossaryCollection(limit:5) {
              items {
                glossaryItem
                info {
                    json
                }
              }
            }
            activitiesCollection(limit:5) {
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
        setActivity(newActivity)
    }

    return (
        <div className="toolStart">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && 
                <div className="startContent">
                    <div className="phases">
                        <PhaseStartItem phaseId={1} progress={0} activityHandler={handleActivity}/>
                        <PhaseStartItem phaseId={2} progress={0} activityHandler={handleActivity}/>
                        <PhaseStartItem phaseId={3} progress={0} activityHandler={handleActivity}/>
                        <PhaseStartItem phaseId={4} progress={0} activityHandler={handleActivity}/>
                        <PhaseStartItem phaseId={5} progress={0} activityHandler={handleActivity}/>
                        <PhaseStartItem phaseId={6} progress={0} activityHandler={handleActivity}/>
                    </div>

                    {content.data.phaseCollection.items.filter(phase => phase.phaseId == phaseId).map((phase) => (
                        <div className="introGloss">
                            <h2 className='CardContainer subTitle'>{phase.subTitle}</h2>
                            <ActivityNavigation phase={phaseId} activities={phase.activitiesCollection.items} activityHandler={handleActivity}/>
                            <hr />
                            {/* Check if there is an activity selected, if so show the activity information. Otherwise show the Phase information */}
                            {activity == 0 && <div>
                                <h3>General introduction:</h3>
                                <div>
                                    {phase.generalIntroduction.json.content.map((item) => (
                                        <RichTextRecursive {...item} />
                                    ))}
                                </div>
                                <Glossary glossaryItems={phase.glossaryCollection.items} />
                            </div>}
                            {activity != 0 && <div>
                                {phase.activitiesCollection.items.filter(a => a.id == activity).map((activity) => (
                                    <div>
                                        <h2>{activity.name}: {activity.subTitle}</h2>
                                        <h3>Aim: </h3>
                                        <p>{activity.aim.json.content.map((aim) => (
                                            <RichTextRecursive {...aim} />
                                        ))}</p>
                                        <h3>Description: </h3>
                                        <p>{activity.description.json.content.map((description) => (
                                            <RichTextRecursive {...description} />
                                        ))}</p>

                                        <StepNavigationBar steps={activity.stepsCollection.items} phase={phase.phaseId} activity={activity.id} />
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