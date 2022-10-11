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
            linkedFrom {
              entryCollection {
                items {
                  sys {
                    id
                  }
                }
              }
            }
          }
        }
      }
    `

    const {content, isPending, error} = useContent(query);

    return (
        <div className="CardContainer">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && content.data.assetCollection.items.map((asset) => (
                <ResourceFile title={asset.title} url={asset.url} />
                // asset.linkedFrom.entryCollection.items.map((entry) => (
                //     steps.map((step) => (
                //         <>
                //         {<ResourceFile title={asset.title} url={asset.url} entryId={entry.sys.id} stepId={step.id} />}
                //         </>
                //     ))
                // ))
            ))}

            {/* {content && content.data.assetCollection.items.map((item) => (
                <div>
                    {item.linkedFrom.entryCollection.items.map((entry) => (
                        <ResourceFile title={item.title} url={item.url} entryId={entry.sys.id} steps={steps}/>
                    ))}
                </div>
            ))} */}

        </div>
    );
}
 
export default Resources;