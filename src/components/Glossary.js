import './Glossary.css';
import RichTextRecursive from './RichTextRecursive';

const Glossary = ({glossaryItems}) => {
    return (
        <div className="glossary">
            <h3>Glossary</h3>
            <hr />
            {glossaryItems && glossaryItems.map((item) => (
                <p><strong>{item.glossaryItem}</strong> - {item.info.json.content.map((infoItem) => (
                    <RichTextRecursive {...infoItem} />
                ))}<br/><hr/></p>
            ))}
        </div>
    );
}
 
export default Glossary;