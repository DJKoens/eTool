import './Glossary.css';
import RichTextRecursive from './RichTextRecursive';

const Glossary = ({glossaryItems}) => {
    return (
        <div className="glossary">
            {glossaryItems.length > 0 &&
            <table>
                <thead>
                <tr>
                    <th>Definition</th>
                    <th>Meaning</th>
                </tr>
                </thead>
                <tbody>
                    {glossaryItems && glossaryItems.map((item, index) => (
                        <tr key={item.glossaryItem + `-${index}`}>
                            <td>{item.glossaryItem}</td>
                            <td>
                                {item.info.json.content.map((infoItem, index) => (
                                    <RichTextRecursive {...infoItem} key={index} />
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            }
            {glossaryItems.length == 0 &&
            <h4>No glossary items</h4>
            }
        </div>      
    );
}
 
export default Glossary;