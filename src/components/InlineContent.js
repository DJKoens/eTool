import useContent from '../useContent.js';
import Abbreviation from './Abbreviation.js';
import RichTextRecursive from './RichTextRecursive.js';

const InlineContent = ({id, newComponent}) => {

    const query = `
    {
        glossaryItem(id:"${id}"){
            abbreviation
            meaning
        }
        activity(id:"${id}"){
            name
        }
        step(id:"${id}"){
            id
        }
        phase(id:"${id}"){
            phaseId
        }
    }
    `

    const {content, isPending, error} = useContent(query);

    const getFifthActivityId = (activity) => {
        if (activity == '1') return '1';
        if (activity == '2A') return '2';
        if (activity == '2B') return '3';
        if (activity == '2C') return '4';
        if (activity == '3A') return '5';
        if (activity == '3B') return '6';
        if (activity == '4') return '7';
    }

    const getLinkFromActivity = (name) => {
        var splitLink = name.split(' ')[1].split('.');
        var activityId = (splitLink[0] == 5) ? getFifthActivityId(splitLink[1]) : splitLink[1];
        var phaseId = (splitLink[0].length > 1 && splitLink[0][1] == 'B') ? 7 : splitLink[0][0];
        return phaseId + "/activity/" + activityId + "/step/0";
    }

    const getLinkFromStep = (name) => {
        var splitLink = name.split('.');
        var activityId = (splitLink[0] == '5') ? getFifthActivityId(splitLink[1]) : splitLink[1];
        var phaseId = (splitLink[0].length > 1 && splitLink[0][1] == 'B') ? 7 : splitLink[0][0];
        return phaseId + "/activity/" + activityId + "/step/" + splitLink[2];
    }

    return ( 
        <>
        {error && <>{error}</>}
            {isPending && <>Loading...</>}
            {content && content.data.glossaryItem && <Abbreviation abbreviation={content.data.glossaryItem.abbreviation} meaning={content.data.glossaryItem.meaning} />}
            {content && content.data.phase && <a href={`/tool/phase/${content.data.phase.phaseId}/activity/0/step/0`}>Phase {(content.data.phase.phaseId == 7) ? "2B" : content.data.phase.phaseId}</a>}
            {content && content.data.activity && <a href={`/tool/phase/${getLinkFromActivity(content.data.activity.name)}`}>{content.data.activity.name}</a>}
            {content && content.data.step && <a href={`/tool/phase/${getLinkFromStep(content.data.step.id)}`}>{content.data.step.id}</a>}
            {content && newComponent.map((component) => (
                <RichTextRecursive {...component} />
            ))}
        </>
    );
}
 
export default InlineContent;