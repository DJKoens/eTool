import './Resources.css';
import ResourceFile from './ResourceFile';
import useContent from '../useContent';

const Resources = ({steps}) => {

    const query = `
    {
        assetCollection {
          items {
            title
            url
            description
          }
        }
      }
    `

    const {content, isPending, error} = useContent(query);

    return (
        <div className="CardContainer resourceCard">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <h2>Resources</h2>
            {content && content.data.assetCollection.items.map((asset) => (
                <>
                {steps.map((step) => (
                    (step.id == asset.description) && <ResourceFile title={asset.title} url={asset.url} />
                ))}
                </>
            ))}
        </div>
    );
}
 
export default Resources;