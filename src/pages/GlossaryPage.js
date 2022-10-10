import './GlossaryPage.css';
import Glossary from "../components/Glossary";
import useContent from "../useContent";

const GlossaryPage = () => {
    const query = `
    {
        glossaryCollection {
          items {
            glossaryItem
            info {
              json
            }
          }
        }
      }
    `;

    const {content, isPending, error} = useContent(query);
    
    return (
        <div className="glossaryPage">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && <Glossary glossaryItems={content.data.glossaryCollection.items} />}
        </div>
    );
}
 
export default GlossaryPage;