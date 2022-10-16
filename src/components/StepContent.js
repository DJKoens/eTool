import useContent from '../useContent.js';
import RichText from './RichTextRecursive.js';

const StepContent = ({id}) => {

    const query = `
    {
        stepCollection {
            items {
                id
                title
                responsible
                shortDescription{
                    json
                }
            }
        }
    }
    `;

    const {content, isPending, error} = useContent(query);

    return (
      <div className="CardContainer">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {content && <div>
            {content.data.stepCollection.items.map((step) => (
                (step.id == id && <div key={step.id}>
                    <h2>Step {step.id} - {step.title}</h2>
                    <h3>Responsible: {step.responsible}</h3>
                    {step.shortDescription.json.content.map((item, index) => (
                        <RichText {...item} key={index}/>
                    ))}
                </div>)
            ))}
          </div>}
      </div>
    );
}
 
export default StepContent