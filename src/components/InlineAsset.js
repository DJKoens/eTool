import useContent from '../useContent.js';

const InlineAsset = ({id}) => {

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
        </span>
    );
}
 
export default InlineAsset;