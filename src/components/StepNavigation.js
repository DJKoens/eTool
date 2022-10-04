import './StepNavigation.css';
import { NavLink, useParams } from 'react-router-dom';
import { useState } from 'react';
import StepContent from './StepContent';
import ChecklistContent from './ChecklistContent';
import Resources from './Resources';

const StepNavigationBar = ({steps, phase, activity}) => {

    const {stepId} = useParams();
    const [currentStep, setStep] = useState(stepId);

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
            <div className="resources">
                {stepId === 'checklist' && <ChecklistContent phaseId={phase} activityId={activity} />}
                {stepId !== 'checklist' && stepId != 0 && <StepContent id={`${phase}.${activity}.${currentStep}`} />}
                {stepId !== '0' && <Resources />}
            </div>
        </div>
    );
}
 
export default StepNavigationBar;