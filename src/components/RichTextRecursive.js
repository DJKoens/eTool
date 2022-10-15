import InlineAsset from "./InlineAsset";
import InlineContent from "./InlineContent";
import InlineImage from "./InlineImage";

const RichTextRecursive = ({nodeType, data, content, value, marks}) => {

    const entryLinkHandler = (e, id) => {
        console.log(id)
    }

    const textComponent = (text) =>{
        for (let index = 0; index < marks.length; index++) {
            if (marks[index].type == "bold") return <b>{text}</b>
            if (marks[index].type == "underline") return <u>{text}</u>
        }
        return <>{text}</>;
    }

    return (
        <>
        {nodeType === "table" && <table>
            <tbody>
                {content.map((newComponent, index) => (
                    <RichTextRecursive {...newComponent} key={index} />
                ))} 
            </tbody>   
        </table>}
        {nodeType === "table-row" && <tr>
            {content.map((newComponent, index) => (
                <RichTextRecursive {...newComponent} key={index} />
            ))}
        </tr>}
        {nodeType === "table-cell" && <td>
            {content.map((newComponent, index) => (
                <RichTextRecursive {...newComponent} key={index} />
            ))}
        </td>}
        {nodeType === "unordered-list" && <ul>
            {content.map((newComponent, index) => (
                <RichTextRecursive {...newComponent} key={index}/>
            ))}
        </ul> }
        {nodeType === "ordered-list" && <ol>
            {content.map((newComponent, index) => (
                <RichTextRecursive {...newComponent} key={index} />
            ))}
        </ol>}
        {nodeType === "list-item" && <li>
            {content.map((newComponent, index) => (
                <RichTextRecursive {...newComponent} key={index} />
            ))}
        </li>}
        {nodeType === "paragraph" && <p>
            {content.map((newComponent, index) => (
                <RichTextRecursive {...newComponent} key={index} />
            ))}
        </p> }
        {nodeType === "text" && value && textComponent(value)}
        {nodeType === "entry-hyperlink" && <a href={data.uri} onClick={(e) => {entryLinkHandler(e, data.target.sys.id)}}>
            {content.map((newComponent, index) => (
                <RichTextRecursive {...newComponent} key={index} />
            ))}    
        </a>}
        {nodeType === "hyperlink" && <a href={data.uri} onClick={(e) => {entryLinkHandler(e, data.target.sys.id)}}>
            {content.map((newComponent, index) => (
                <RichTextRecursive {...newComponent} key={index} />
            ))}    
        </a>}
        {nodeType === "embedded-entry-inline" && <InlineContent id={data.target.sys.id} newComponent={content} />}
        {nodeType === "asset-hyperlink" && <InlineAsset id={data.target.sys.id} />}
        {nodeType === "embedded-asset-block" && <InlineImage id={data.target.sys.id} newComponent={content} />}
        </>
    )
}

export default RichTextRecursive