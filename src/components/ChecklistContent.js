import useContent from "../useContent";
import "./Checklist.css";
import RichTextRecursive from "./RichTextRecursive";

const ChecklistContent = ({checklistId}) => {

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

    const checks = (localStorage.getItem(`checks:${checklistId}`) != null) ? [...JSON.parse(localStorage.getItem(`checks:${checklistId}`))] : new Array();

    const handleCheckChange = (event, id) => {
      if (!checks.find(c => c.id === id)){
        // Create a new item
        checks.push({
          id: id,
          checked: event.target.checked 
        })  
      } else {
        // Update the existing item
        checks.find(c => c.id === id).checked = event.target.checked;
      }
      
      localStorage.setItem(`checks:${checklistId}`, JSON.stringify(checks));
    }

    const createSubQuestion = (question, categoryIndex, questionIndex) => {
        return <>
        {question.subQuestionTitleRich.json.content.map((subTitle, subTitleIndex) => (
            <RichTextRecursive {...subTitle} key={`${subTitle}-${subTitleIndex}`} />
        ))}
        {question.richquestionItemsCollection.items.map((subQuestion, subQuestionId) => (
            <label key={`${subQuestion.stepId}-${subQuestionId}`}>
              <input id={`input-c${categoryIndex}-q${questionIndex}-s${subQuestionId}`} type="checkbox" className="subQuestion"
              onChange={(e) => handleCheckChange(e, `input-c${categoryIndex}-q${questionIndex}-s${subQuestionId}`)}
              defaultChecked={checks.find(c => (c.id === `input-c${categoryIndex}-q${questionIndex}-s${subQuestionId}`) && c.checked)}
              required />
              {subQuestion.content.json.content.map((subItem, subIndex) => (
                <RichTextRecursive {...subItem} key={`text${subQuestionId}-${subIndex}`} />
              ))}
            </label>
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
                          {/* Question keys are build up like this: 'input-c[Question category]-q[Question number]-s[SubQuestion]' */}
                            {question.subQuestionTitleRich && createSubQuestion(question, catIndex, questionIndex)}
                            {!question.subQuestionTitleRich && 
                            <label>
                              <input id={`input-c${catIndex}-q${questionIndex}-s0`} type="checkbox"
                              onChange={(e) => handleCheckChange(e, `input-c${catIndex}-q${questionIndex}-s0`)}
                              defaultChecked={checks.find(c => (c.id === `input-c${catIndex}-q${questionIndex}-s0`) && c.checked)}
                              required />
                              {question.richquestionItemsCollection.items.map((item, itemIndex) => (
                                item.content.json.content.map((text, textIndex) => (
                                  <RichTextRecursive {...text} key={`text-${itemIndex}-${textIndex}`} />
                                ))
                              ))}
                            </label>}
                        </div>
                    ))}
                </div>
            ))
            }
            <input type="submit" value="Next"/>
        </form>
  );
}
 
export default ChecklistContent;