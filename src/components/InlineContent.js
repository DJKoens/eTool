import useContent from '../useContent.js';
import Abbreviation from './Abbreviation.js';
import RichTextRecursive from './RichTextRecursive.js';

const InlineContent = ({id, newComponent}) => {

    const query = `
    {
        glossaryItem(id:"${id}"){
            abbreviation
            meaning
        }
        activity(id:"${id}"){
            name
        }
        step(id:"${id}"){
            id
        }
    }
    `

    const {content, isPending, error} = useContent(query);

    return ( 
        <span className="inlineContent">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && content.data.glossaryItem && <Abbreviation abbreviation={content.data.glossaryItem.abbreviation} meaning={content.data.glossaryItem.meaning} />}
            {content && content.data.activity && <a href="">{content.data.activity.name}</a>}
            {content && content.data.step && <a href="">{content.data.step.id}</a>}
            {content && newComponent.map((component) => (
                <RichTextRecursive {...component} />
            ))}
        </span>
    );
}
 
export default InlineContent;