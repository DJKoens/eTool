import { useParams } from "react-router-dom";
import useContent from "../useContent";
import ResourceFile from "./ResourceFile";
import './ResourceQuery.css';

const ResourceQuery = () => {
    
    const {resourceQuery} = useParams();

    const query = `
    {
        assetCollection {
          items {
            title
            url
          }
        }
      }
    `

    const {content, isPending, error} = useContent(query);
    
    return (  
        <div className="resourceQuery">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <h1>Search Results for '{resourceQuery}':</h1>
            {content && content.data.assetCollection.items.filter(item => item.title.toLowerCase().match(resourceQuery.toLowerCase())).map((asset) => (
                <div className="CardContainer">
                    <ResourceFile title={asset.title} url={asset.url} />
                </div>
            ))}
        </div>
    );
}
 
export default ResourceQuery;