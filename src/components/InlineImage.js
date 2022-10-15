import useContent from "../useContent";

const InlineImage = ({id}) => {
    
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
            {content && <img src={content.data.asset.url} alt={content.data.asset.title}/>}
        </>
    );
}
 
export default InlineImage;