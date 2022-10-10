import InlineAsset from "./InlineAsset";
import InlineContent from "./InlineContent";

const RichTextRecursive = ({nodeType, data, content, value, marks}) => {

    const entryLinkHandler = (e, id) => {
        console.log(id)
    }

    return (
        <>
        {nodeType === "unordered-list" && <ul>
            {content.map((newComponent, index) => (
                <RichTextRecursive {...newComponent} key={index}/>
            ))}
        </ul> }
        {nodeType === "list-item" && content.map((newComponent, index) => (
            <li key={index}><RichTextRecursive {...newComponent}/></li>
        ))}
        {nodeType === "paragraph" && <p>
            {content.map((newComponent, index) => (
                <RichTextRecursive {...newComponent} key={index} />
            ))}
        </p> }
        {nodeType === "text" && value && <>{value}</>}
        {nodeType === "entry-hyperlink" && content.map((newComponent, index) => (
            //eslint-disable-next-line
            <a key={index} href="" onClick={(e) => {entryLinkHandler(e, data.target.sys.id)}}><RichTextRecursive {...newComponent} /></a>
        ))}
        {nodeType === "embedded-entry-inline" && <InlineContent id={data.target.sys.id} newComponent={content} />}
        {nodeType === "embedded-asset-block" && <InlineAsset id={data.target.sys.id} newComponent={content} />}
        </>
    )
}

export default RichTextRecursive