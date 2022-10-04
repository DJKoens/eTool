import phaseButton from '../media/phaseButton.png';
import activityButton from '../media/activityButton.png';
import stepButton from '../media/stepButton.png';
import checklistButton from '../media/checklistButton.png';
import './Instructions.css';

const Instructions = () => {
    return (
        <div className="instructionContent">
            <h2>Instructions</h2>
            <p>
                To start using the tool, navigate to the 'Tool' Button at the top. The general introduction will give you more information about the tool
                and you can choose between the various different phases to continue. To select a phase, click one of the phase buttons: 
            </p>
            <img src={phaseButton}/>
            <p>
                After selecting the phase, you can read all about it and see the different activities that are part of that phase.
                Once you have read the phase introduction, select one of the activities to continue. The activity button looks like this:
            </p>
            <img src={activityButton} />
            <p>
                Once you have selected an activity, you will see what the aim of the activity is and what the activity is all about.
                Furthermore you can see that every activity contains multiple different steps that are required to complete the activity. To see these steps,
                press one of the step buttons:
            </p>
            <img src={stepButton} />
            <p>
                Finally, you can check that all the steps of the activity are completed by filling in the checklist that can be found next to the different steps.
                Once the checklist is complete, you can click the 'Next' button to move along to the next activity or phase.
            </p>
        </div>
    );
}
 
export default Instructions;