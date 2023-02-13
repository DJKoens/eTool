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
        <>
            {error && <>{error}</>}
            {isPending && <>Loading...</>}
            {content && <a href={content.data.asset.url} target="_blank" rel='noreferrer'>{content.data.asset.title}</a>}
        </>
    );
}
 
export default InlineAsset;