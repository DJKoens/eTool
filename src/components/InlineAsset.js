import useContent from '../useContent.js';
import RichTextRecursive from './RichTextRecursive.js';

const InlineAsset = ({id, newComponent}) => {

    const query = `
    {
        asset(id:"${id}"){
            title
            url
        }
    }
    `

    const {content, isPending, error} = useContent(query);

    return (
        <span>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && <a href={content.data.asset.url}>{content.data.asset.title}</a>}
            {content && newComponent.map((component) => (
                <RichTextRecursive {...component} />
            ))}
        </span>
    );
}
 
export default InlineAsset;