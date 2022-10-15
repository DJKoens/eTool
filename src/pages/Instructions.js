import './Instructions.css';
import screenshot1 from '../media/instructions/Instructions screenshot 1.jpg';
import screenshot2 from '../media/instructions/Instructions screenshot 2.jpg';
import screenshot3 from '../media/instructions/Instructions screenshot 3.jpg';
import screenshot4 from '../media/instructions/Instructions screenshot 4.jpg';
import screenshot5 from '../media/instructions/Instructions screenshot 5.jpg';
import screenshot6 from '../media/instructions/Instructions screenshot 6.jpg';
import screenshot7 from '../media/instructions/Instructions screenshot 7.jpg';

const Instructions = () => {
    return (
        <div className="instructionContent">
            <h2>Instructions for using the tool</h2>
            <p><strong>It is important to keep in mind that this tool provides the ideal pathway for development and implementation of an NEDL. 
                Countries can always decide to deviate from or amend the Activities to fit country-specific context and customs.</strong>
            </p>
            <div className="CardContainer">
            <h3>Sections of the tool</h3>
            <p>
                The main component of this tool is the stepwise NEDL development and implementation roadmap. 
                In addition, this tool provides a section with instructions on how to use the tool (this section), 
                a glossary of terms used throughout the tool, and a further reading section with links to literature and guidelines for additional information on NEDL development and implementation.
            </p>
            </div>
            <div className="CardContainer">
            <h3>Stepwise NEDL development and implementation roadmap</h3>
            <p>
                The stepwise NEDL development and implementation roadmap is divided into six Phases. 
                Each Phase consists of one or more Activities. Each Activity consists of one or more Steps.
            </p>
            <p>
                <strong>Step 1: Click on the roadmap to go to a specific Phase. </strong>
            </p>
            <img src={screenshot1} />
            <p>
                Each Phase has the same outline: it starts with an introduction that gives an overview of the whole Phase. 
                Activity buttons are provided directly under the title of the Phase to go to specific Activities in the Phase. 
                After clicking on the Phase button, you are directly led to the first Activity of that Phase. 
                If you'd like to go to another Activity in this Phase, click on that Activity button.
            </p>
            <p>
                <strong>Step 2: Click on one of the Activity buttons. </strong>
            </p>
            <p>
                Below the Activity buttons an introduction describes the purpose and output of the Phase, 
                and the Activities included in the Phase that lead to this output. 
                A glossary of terms used in the Phase is also provided. This is followed by series of Step buttons that lead to specific Steps of an Activity. 
            </p>
            <img src={screenshot2} />
            <p>
                <strong>Step 3: Click on a Step button. </strong>
            </p>
            <p>
                Each Step has the same outline: a one-sentence description of the aim of the Step, the entity responsible for implementation of the Step, 
                and a description of what needs to be done in the Step. On the right-hand side are links to templates of documents or other information sources required to implement the Step.
            </p>
            <img src={screenshot3} />
            <p>
                Go to the next Step once the current Step has been implemented. 
                Either at the end of each Step or when all the Steps of an Activity have been implemented:
            </p>
            <p>
                <strong>Step 4: Click on the checklist button </strong>
            </p>
            <p>
                 The tool provides checklist questions to verify correct and complete implementation of all the Steps of each Activity. 
                 Progress can be monitored by ticking checklist questions. The Phase button turns green based on the number of checklist questions ticked.
            </p>
            <img src={screenshot4} />
            <p>
                When all the Steps of a certain Activity have been completed and the checklist questions have been answered, 
                go to the next Activity by clicking the button of the next Activity (hence, repeat from Step 2). 
            </p>
            <p>
                When all the Activities of a certain Phase have been completed and all the checklist questions have been answered, 
                the Phase button will have turned completely green.
                Go to the next Phase by clicking the button of the next Phase. Hence, repeat from Step 1.
            </p>
            <img src={screenshot5} />
            <p>
                Sometimes Activities will take more time, but you can still decide to continue with the next Activity/-ies. 
                Also, sometimes Phases (2A and 2B) or Activities (in Phase 5) can be performed in parallel. 
            </p>
            </div>
            <div className="CardContainer">
            <h3>Additional features</h3>
            <p>
                This tool contains some additional features aside from the stepwise NEDL development and implementation roadmap.
            </p>
            <h3>Search feature for resources</h3>
            <p>
                This tool contains a search function that helps to find specific templates of documents and other resources. To use this, 
                insert a keyword in the search box and click on the search icon. The search function will only work when you are online.
            </p>
            <img src={screenshot6} />
            <h3>Abbreviations</h3>
            <p>
                When hovering over abbreviations in the text, the full meaning of the abbreviation will appear.
            </p>
            <h3>Glossary</h3>
            <p>
                This section explains the terms used throughout the tool.
            </p>
            <img src={screenshot7} />
            <h3>Further reading</h3>
            <p>
                Whereas links to resources directly required for implementation of a specific Activity are provided next to each Activity, this section contains links to resources that provide additional background information on development, implementation, review, and revision of an NEDL.
                @@screenshot of further reading section
            </p>
            <h3>Acknowledgements</h3>
            <p>
                This section acknowledges the contributions of the funders, developers, and reviewers of the tool.
            </p>
            </div>
        </div>
    );
}
 
export default Instructions;