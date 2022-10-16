import './StepNavigation.css';
import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import StepContent from './StepContent';
import ChecklistContent2 from './ChecklistContent2';
import Resources from './Resources';
import useContent from '../useContent';

const StepNavigationBar = ({steps, phase, activity}) => {

    const {stepId} = useParams();
    const [currentStep, setStep] = useState(stepId);

    const query = `
    {
        phaseCollection(limit:8) {
          items{
            phaseId
            activitiesCollection(limit:10) {
              items {
                id
                checklist {
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
      }
    `

    const {content, isPending, error} = useContent(query);

    return (
        <div>
            <div className="stepNavigation">
                {steps.map((step) => (
                    <div className="stepBarItem" key={step.id}>
                        <NavLink to={`/tool/phase/${phase}/activity/${activity}/step/${step.id[step.id.length - 1]}`} onClick={() => setStep(step.id[step.id.length - 1])} style={
                ({isActive}) => {
                    return {
                        backgroundColor: isActive ? 'orange' : ''
                    }
                }
            }>Step {step.id}</NavLink>
                    </div>
                ))}
                <NavLink className='stepBarChecklist' to={`/tool/phase/${phase}/activity/${activity}/step/checklist`} style={
                ({isActive}) => {
                    return {
                        backgroundColor: isActive ? 'orange' : ''
                    }
                }
            }>Checklist</NavLink>
            </div>

            <hr />
            {/* {stepId === 'checklist' && <Checklist checklist={checklist} checkHandler={checkHandler} />} */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && 
            <div className="resources">
            
            {stepId === 'checklist' && content.data.phaseCollection.items.filter(phaseItem => phaseItem.phaseId === phase).map((phaseItem) => (
                phaseItem.activitiesCollection.items.filter(activityItem => activityItem.id === activity).map((activityItem) => (
                    <ChecklistContent2 phaseId={phase} activityId={activity} checklistId={activityItem.checklist.sys.id} key={`Checklist_${phase}_${activity}`} />
                ))
            ))
            }

                {/* {stepId === 'checklist' && <ChecklistContent phaseId={phase} activityId={activity} />} */}
                {/* {stepId === 'checklist' && <ChecklistContent2 phaseId={phase} activityId={activity} />} */}
                {stepId !== 'checklist' &&
                (phase !== 2 && phase !== 7) &&
                (phase !== 5) &&
                stepId != 0 && <StepContent id={`${phase}.${activity}.${currentStep}`} />}
                {/* Phase 2 edge cases */}
                {stepId !== 'checklist' && stepId != 0 && phase === 2 && <StepContent id={`${phase}A.${activity}.${currentStep}`} />}
                {stepId !== 'checklist' && stepId != 0 && phase === 7 && <StepContent id={`${phase-5}B.${activity}.${currentStep}`} />}
                {/* Phase 5 edge cases */}
                {stepId !== 'checklist' && stepId != 0 && phase === 5 && activity === 1 && <StepContent id={`${phase}.1.${currentStep}`} />}
                {stepId !== 'checklist' && stepId != 0 && phase === 5 && activity === 2 && <StepContent id={`${phase}.2A.${currentStep}`} />}
                {stepId !== 'checklist' && stepId != 0 && phase === 5 && activity === 3 && <StepContent id={`${phase}.2B.${currentStep}`} />}
                {stepId !== 'checklist' && stepId != 0 && phase === 5 && activity === 4 && <StepContent id={`${phase}.2C.${currentStep}`} />}
                {stepId !== 'checklist' && stepId != 0 && phase === 5 && activity === 5 && <StepContent id={`${phase}.3A.${currentStep}`} />}
                {stepId !== 'checklist' && stepId != 0 && phase === 5 && activity === 6 && <StepContent id={`${phase}.3B.${currentStep}`} />}
                {stepId !== 'checklist' && stepId != 0 && phase === 5 && activity === 7 && <StepContent id={`${phase}.4.${currentStep}`} />}
                {stepId !== '0' && <Resources steps={steps}/>}
            </div>}
        </div>
    );
}
 
export default StepNavigationBar;