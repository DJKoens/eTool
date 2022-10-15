import { useEffect } from "react";
import useContent from "../useContent";
import "./Checklist.css";
import RichTextRecursive from "./RichTextRecursive";

let progress = 0;
let maxQuestions = 0;
var checkMap = {'progress': progress};

let stepTitles = [];
let phaseStorageID = 0;

function checkStepTitle(title) {
  if (stepTitles.includes(title)){
    return false;
  }
  stepTitles.push(title);
  return true;
}

const handleCheckbox = (e) => {
    if (e.target.checked) {
        progress += 1;
    } else {
        progress -= 1;
    }

    if (checkMap == null) checkMap={'progress': progress};
    checkMap['progress'] = progress;
    checkMap[e.target.id] = e.target.checked;
    localStorage.setItem(`checksPhase${phaseStorageID}`, JSON.stringify(checkMap));
    console.log(checkMap);
}

const handleChecklistSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
}

const ChecklistContent = ({phaseId, activityId}) => {

  useEffect(() => {
    stepTitles = [];
    phaseStorageID = phaseId;
    checkMap = {'progress': progress};
    checkMap = JSON.parse(localStorage.getItem(`checksPhase${phaseStorageID}`));
  })

    const query = `
    {
        phaseCollection(limit:7) {
          items{
            phaseId
            activitiesCollection(limit:10) {
              items {
                id
                checklist {
                  questionsCollection(limit:10) {
                    items {
                      richquestionItemsCollection(limit:5) {
                        items {
                          stepId
                          content {
                            json
                          }
                        }
                      }
                      subQuestionTitleRich {
                        json
                      }
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
    // checkMap['progress'] = progress;

    return (
        <form className='CardContainer' onSubmit={handleChecklistSubmit}>
            <h2>Checklist</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && <div>
            {content.data.phaseCollection.items.filter(phase => phase.phaseId === phaseId).map((phase) => (
                phase.activitiesCollection.items.filter(activity => activity.id === activityId).map((activity) => (
                  // activity.checklist.questionsCollection.items.map((question, index) => (
                  //   <div key={index}>
                  //     {checkStepTitle(question.stepTitle) &&
                  //       <h3>{question.stepTitle}</h3>
                  //     }
                  //     {question.subQuestionTitle && <p>
                  //       {question.subQuestionTitle}  
                  //       {question.questionItems.map((item, subIndex) => (
                  //         <label key={subIndex}><input id={`${index}-${subIndex}`} type="checkbox" onChange={(e) => handleCheckbox(e)} required />{item}</label>
                  //       ))}
                  //     </p>}
                  //     {!question.subQuestionTitle && 
                  //       <label key={index}><input id={`${index}--`} type="checkbox" onChange={(e) => handleCheckbox(e)} required/>{question.questionItems[0]}</label>
                  //     }
                  //   </div>
                  // ))
                  activity.checklist.questionsCollection.items.map((question, index) => (
                    <div key={index}>
                      {checkStepTitle(question.stepTitle) &&
                        <h3>{question.stepTitle}</h3>
                      }
                      {question.subQuestionTitleRich && <p>
                        <RichTextRecursive {...question.subQuestionTitleRich.json.content} />
                        {question.richquestionItemsCollection.items.map((item, subIndex) => (
                          <label key={subIndex}><input id={`${index}-${subIndex}`} type="checkbox" onChange={(e) => handleCheckbox(e)} required /><RichTextRecursive {...item.content.json} /></label>
                        ))}
                      </p>}
                      {!question.subQuestionTitleRich && 
                      <>
                        {question.richquestionItemsCollection.items.map((item, subIndex) => (
                          <label key={subIndex}><input id={`${index}-${subIndex}`} type="checkbox" onChange={(e) => handleCheckbox(e)} required/><RichTextRecursive {...item.content.json} /></label>
                        ))}
                        </>
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