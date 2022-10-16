import { useState } from "react";
import useContent from "../useContent";
import "./Checklist.css";
import RichTextRecursive from "./RichTextRecursive";

const ChecklistContent2 = ({phaseId, activityId, checklistId}) => {

    const query = `
    {
        checklist(id:"${checklistId}"){
          categoriesCollection(limit:8){
            items{
              stepId
              questionsCollection(limit:10){
                items {
                  richquestionItemsCollection(limit:15){
                    items {
                      stepId
                      content{
                        json
                      }
                    }
                  }
                  subQuestionTitleRich {
                    json
                  }
                }
              }
            }
          }
        }
      }
      `;

    const {content, isPending, error} = useContent(query);

    const createSubQuestion = (question) => {
        return <>
        <h3>{question.stepTitle}</h3>
        {question.subQuestionTitleRich.json.content.map((subTitle, subTitleIndex) => (
            <RichTextRecursive {...subTitle} key={`${subTitle}-${subTitleIndex}`} />
        ))}
        {question.richquestionItemsCollection.items.map((subQuestion, subQuestionId) => (
            subQuestion.content.json.content.map((subItem, subIndex) => (
                <label key={`${subIndex}-${subQuestion.stepId}-${subQuestionId}`}>
                    <input id={`${subQuestionId}-${subIndex}`} type="checkbox" required />
                    <RichTextRecursive {...subItem} />
                </label>
            ))
        ))}
        </>
    }

    return (
        <form className='CardContainer'>
            <h2>Checklist</h2>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && 
            content.data.checklist.categoriesCollection.items.map((checkCategory, catIndex) => (
                <div key={`checklist_category_${catIndex}`}>
                    <h3>Step {checkCategory.stepId}</h3>
                    {checkCategory.questionsCollection.items.map((question, questionIndex) => (
                        <div key={`category${catIndex}_question_${questionIndex}`}>
                            {question.subQuestionTitleRich && createSubQuestion(question)}
                            {!question.subQuestionTitleRich && question.richquestionItemsCollection.items.map((item, itemIndex) => (
                                item.content.json.content.map((text, textIndex) => (
                                    <label key={`${questionIndex}-${itemIndex}-${textIndex}`}>
                                        <input id={`input-${questionIndex}-${itemIndex}`} type="checkbox" required />
                                        <RichTextRecursive {...text} />
                                    </label>
                                ))
                            ))}
                        </div>
                    ))}
                </div>
            ))
            }
            <input type="submit" value="Next"/>
        </form>
    );
}
 
export default ChecklistContent2;