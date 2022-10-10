import './Glossary.css';
import RichTextRecursive from './RichTextRecursive';

const Glossary = ({glossaryItems}) => {
    return (
        <div className="glossary">
            <table>
                <thead>
                <tr>
                    <th>Definition</th>
                    <th>Meaning</th>
                </tr>
                </thead>
                <tbody>
                    {glossaryItems && glossaryItems.map((item) => (
                        <tr key={item.glossaryItem}>
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
        </div>
    );
}
 
export default Glossary;