import { useState } from "react";
import useContent from "../useContent";
import "./Checklist.css";
import ChecklistSubTitle from "./ChecklistSubTitle";
import RichTextRecursive from "./RichTextRecursive";

const ChecklistContent2 = ({phaseId, activityId}) => {

    const [stepTitles, setSteptitles] = useState([])

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

    const createSubQuestion = (question, index) => {
        return <>
        {question.subQuestionTitleRich.json.content.map((subTitle, subTitleIndex) => (
            <RichTextRecursive {...subTitle} key={`${index}-${subTitleIndex}`} />
        ))}
        {question.richquestionItemsCollection.items.map((subQuestion, subQuestionId) => (
            subQuestion.content.json.content.map((subItem, subIndex) => (
                <label key={`${index}-${subQuestion.stepId}-${subQuestionId}`}>
                    <input id={`${subQuestionId}-${subIndex}`} type="checkbox" required />
                    <RichTextRecursive {...subItem} />
                </label>
            ))
        ))}
        </>
    }

    const checkForStepTitle = (title) => {
        if (!stepTitles.includes(title)){
            stepTitles.push(title);
            setSteptitles(stepTitles);
            console.log("New Title: " + title);
            return <ChecklistSubTitle subTitle={title} />;
        }
    }

    return (
        <form className='CardContainer'>
            <h2>Checklist</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && 
            content.data.phaseCollection.items.filter(phase => phase.phaseId === phaseId).map((phase) => (
                phase.activitiesCollection.items.filter(activity => activity.id === activityId).map((activity) => (
                  activity.checklist.questionsCollection.items.map((question, index) => (
                    <div key={index}>
                      {checkForStepTitle(question.stepTitle)}

                      {question.subQuestionTitleRich && createSubQuestion(question, index)}
                      {!question.subQuestionTitleRich && question.richquestionItemsCollection.items.map((question, questionIndex) => (
                        question.content.json.content.map((item, itemIndex) => (
                            <label key={`${index}-${questionIndex}-${itemIndex}`}>
                                <input id={`${questionIndex}-${itemIndex}`} type="checkbox" required />
                                <RichTextRecursive {...item} />
                            </label>
                        ))
                      ))}
                    </div>
                  ))
                ))
            ))
            }
            <input type="submit" value="Next"/>
        </form>
    );
}
 
export default ChecklistContent2;