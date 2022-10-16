import './PhaseItem.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import useContent from '../useContent';

const PhaseStartItem = ({activePhase, phaseId, activityHandler}) => {

    const query = `
    {
        phaseCollection(limit:7){
          items {
            phaseId
            activitiesCollection(limit:15){
              items {
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
    const [progress, setProgress] = useState(0);
    
    const checklists = [];
    const totalQuestions = {phase1: 44, phase2: 59, phase3: 62, phase4: 49, phase5: 44, phase6: 29};

    const countQuestions = () => {
        let subProgress = 0;
        content.data.phaseCollection.items.filter(phase => phase.phaseId === phaseId).map((phase) => (
            phase.activitiesCollection.items.map((activity) => (
                checklists.push(activity.checklist.sys.id)
            ))
        ))
        for (let id = 0; id < checklists.length; id++){
            let checks = JSON.parse(localStorage.getItem(`checks:${checklists[id]}`));
            if (checks != null){
                for (let check = 0; check < checks.length; check++){
                    if (checks[check] != null && checks[check].checked) subProgress += 1;
                }
            }
        }
        if(subProgress != 0) setProgress((subProgress / totalQuestions[`phase${(phaseId === 7) ? 2 : phaseId}`]) * 100)
        return;
    }

    useEffect(() => {
        if(content != null) countQuestions();
    })

    return (
        <div className="phase" style={{
            background: (progress === 0) ? 'rgb(255, 65, 65)' : `linear-gradient(90deg, #59d85f ${Math.min(progress, 100)}%, rgb(255, 65, 65) ${Math.min(progress + 20, 100)}%)`,
            border: ((activePhase == phaseId) || (activePhase == 7 && phaseId == 2)) ? '6px double black' : '',
            backgroundClip: 'padding-box'
            }}>

            <Link to={`/tool/phase/${phaseId}/activity/0/step/0`} key={phaseId} onClick={() => activityHandler(0)}>
                <p>Phase {phaseId}</p>
            </Link>
        </div>
    );
}
 
export default PhaseStartItem;