import './ResourceFile.css';
import fileIcon from '../media/icon_file.png';
import useContent from '../useContent';

const ResourceFile = ({title, url, entryId, stepId}) => {

    const query = `
    {
        step(id:"${entryId}"){
          id
        }
      }
    `

    const {content, isPending, error} = useContent(query);

    const checkStepId = (steps, entry) => {
        console.log(steps + '-' + entry);
        if (entry != null && steps != null) {
            return steps.filter(step => step.id == entry).length > 0
        }
        return false;
    }

    return (
        <>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && <div className="resFile">
                <img src={fileIcon} alt="File" />
                <a href={url}>{title}</a>
            </div>}

            {/* {content && checkStepId(steps, content.data.step.id) && <div className="resFile">
                <img src={fileIcon} alt="File" />
                <a href={url}>{title}</a>
            </div>} */}

            {/* {content && steps.filter(step => step.id === content.data.step.id).map((item) => (
                <>{console.log(item)}</>
            ))} */}
        </>
    );
}

export default ResourceFile;