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

    const loadResource = (asset) => {
      // Return a resource file for every resource that is part of any of the given steps
      for (var i = 0; i < steps.length; i++){
        if (asset.description != null){
          const assetSteps = asset.description.split('-');
          for (var assetStepId = 0; assetStepId < assetSteps.length; assetStepId++){
            if (assetSteps[assetStepId] === steps[i].id) {
              return <ResourceFile title={asset.title} url={asset.url} key={asset.url} />
            }
          }
        }
      }
    }

    return (
        <div className="CardContainer resourceCard">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <h2>Resources</h2>
            {content && content.data.assetCollection.items.map((asset) => (
              loadResource(asset)
            ))}
        </div>
    );
}
 
export default Resources;