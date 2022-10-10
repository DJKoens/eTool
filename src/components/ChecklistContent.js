import { useEffect } from "react";
import useContent from "../useContent";
import "./Checklist.css";

let progress = 0;
let maxQuestions = 0;
let stepTitles = [];

// const checkStepTitle = (title) => {
//   console.log("Checking title: " + title);
//   if (stepTitles.includes(title)){
//     console.log("Included");
//     return false;
//   }
//   console.log("Not included");
//   stepTitles.push(title);
//   return true;
// }

function checkStepTitle(title) {
  console.log("Checking title: " + title);
  if (stepTitles.includes(title)){
    console.log("Included");
    return false;
  }
  console.log("Not included");
  stepTitles.push(title);
  return true;
}

const handleCheckbox = (e, handler) => {
    if (e.target.checked) {
        progress += 1;
    } else {
        progress -= 1;
    }
    handler(progress, maxQuestions);
}

const handleChecklistSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
}

const ChecklistContent = ({phaseId, activityId}) => {

  useEffect(() => {
    //?
    stepTitles = [];
  })

    const query = `
    {
        phaseCollection(limit:6) {
          items{
            phaseId
            activitiesCollection(limit:10) {
              items {
                id
                checklist {
                  questionsCollection {
                    items {
                      questionItems
                      subQuestionTitle
                      stepTitle
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

    // if (!(maxQuestions > 0)){
    //     checklist.map((checks) => (
    //         maxQuestions += checks.questions.length
    //     ));
    // }

    return (
        <form className='CardContainer' onSubmit={handleChecklistSubmit}>
            <h2>Checklist</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && <div>
            {/* {content.data.phaseCollection.items.filter(phase => phase.phaseId === phaseId).map((phase) => (
                phase.activitiesCollection.items.filter(activity => activity.id === activityId).map((activity) => (
                  activity.checklist.questionsCollection.items.map((question) => (
                    <div>
                      <h3>{question.stepTitle}</h3>
                      {question.subQuestionTitle && <p>
                        {question.subQuestionTitle}  
                        {question.questionItems.map((item) => (
                          <label><input type="checkbox" onInput={(e) => handleCheckbox(e)} required />{item}</label>
                        ))}
                      </p>}
                      {!question.subQuestionTitle && 
                        <label><input type="checkbox" onInput={(e) => handleCheckbox(e)} required/>{question.questionItems[0]}</label>
                      }
                    </div>
                  ))
                ))
            ))} */}
            {content.data.phaseCollection.items.filter(phase => phase.phaseId === phaseId).map((phase) => (
                phase.activitiesCollection.items.filter(activity => activity.id === activityId).map((activity) => (
                  activity.checklist.questionsCollection.items.map((question, index) => (
                    <div key={index}>
                      {checkStepTitle(question.stepTitle) &&
                        <h3>{question.stepTitle}</h3>
                      }
                      {question.subQuestionTitle && <p>
                        {question.subQuestionTitle}  
                        {question.questionItems.map((item, subIndex) => (
                          <label key={subIndex}><input type="checkbox" onInput={(e) => handleCheckbox(e)} required />{item}</label>
                        ))}
                      </p>}
                      {!question.subQuestionTitle && 
                        <label><input type="checkbox" onInput={(e) => handleCheckbox(e)} required/>{question.questionItems[0]}</label>
                      }
                    </div>
                  ))
                ))
            ))}
            </div>
            }
            <input type="submit" value="Next"/>
        </form>
    );
}
 
export default ChecklistContent;