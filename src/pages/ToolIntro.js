import './ToolIntro.css';
import { Link } from 'react-router-dom';
import Abbreviation from '../components/Abbreviation';
import PhaseItemIntro from '../components/PhaseItemIntro';
import overallFlowchart from '../media/home/Overall flowchart.jpg';
import phase1Figure from '../media/home/Phase 1 flowchart.jpg';
import phase2Figure from '../media/home/Phase 2 flowchart.jpg';
import phase3Figure from '../media/home/Phase 3 flowchart.jpg';
import phase4Figure from '../media/home/Phase 4 flowchart.jpg';
import phase5Figure from '../media/home/Phase 5 flowchart.jpg';
import phase6Figure from '../media/home/Phase 6 flowchart.jpg';

const ToolIntro = () => {
    return (
        <div className="introContent">
            <div className="phases">
                <PhaseItemIntro phaseId={1} progress={0} />
                <PhaseItemIntro phaseId={2} progress={0} />
                <PhaseItemIntro phaseId={3} progress={0} />
                <PhaseItemIntro phaseId={4} progress={0} />
                <PhaseItemIntro phaseId={5} progress={0} />
                <PhaseItemIntro phaseId={6} progress={0} />
            </div>

            <h1>Homepage</h1>
             <div className="CardContainer">
             <p><b>
             Welcome to the Foundation for Innovative New Diagnostics (<Abbreviation meaning={'Foundation for Innovative New Diagnostics'} abbreviation={'FIND'} />)
             e-tool for Stepwise Development and Implementation of a National Essential Diagnostics List (<Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />), or in short: the FIND NEDL e-tool!
             </b></p>
             <p>The Lancet Commission on Diagnostics found that 47% of the global population has little or no access to diagnostics. Access to good quality, affordable, and appropriate health products is indispensable to advance universal health coverage (<Abbreviation meaning={'universal health coverage'} abbreviation={'UHC'}/>), address health emergencies, and promote healthier populations. Many countries have adopted and are implementing essential health packages as a means for progressing towards UHC. However, diagnostics are often inadequately covered by these packages. Instead, countries utilize documents that are often not backed by data on national disease prevalence and burden to define which tests should be made available at different tiers of the health system. The World Health Organization (<Abbreviation meaning={'World Health Organization'} abbreviation={"WHO"} />) therefore recommends that countries develop an NEDL. </p>
             </div>

             <div className="CardContainer">
             <h3>What is an NEDL?</h3>
             <p>An NEDL highlights which diagnostic tests must be prioritized and made available throughout the country based on in-country disease prevalence and burden. It is meant to be a tool to trigger commitment and investment in diagnostic services to improve diagnosis, treatment monitoring, screening, and surveillance. Implementation of an NEDL should drive both diagnostic facility strengthening as well as diagnostic networks and systems strengthening. </p>
             </div>
             
             <div className="CardContainer">
             <h3>What is the FIND NEDL e-tool?</h3>
             <p>The FIND NEDL e-tool provides a stepwise roadmap to guide countries on a daily basis with developing and implementing an evidence-based <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> that includes both essential In Vitro Diagnostics (<Abbreviation meaning={'In Vitro Diagnostics'} abbreviation={"IVDs"} />) and essential Imaging Technologies allocated to different tiers of the health system. </p>
             </div>

            <div className="CardContainer">
            <h3>Why was this tool developed?</h3>
             <p>The development and implementation of an NEDL may be challenging. In an ideal world, diagnostic tests can be implemented for all diseases and conditions. In reality, there are many limitations, requiring countries to prioritize diseases and conditions to be covered by the NEDL. There are many global lists of priority diseases and conditions, but data on in-country disease prevalence and burden are often scarce. This puts the countries in a tension field between on the one hand competing lists for priority diseases, conditions, pathogens and diagnostic services, and on the other hand a scarcity of data on in-country diseases prevalence and burden. In addition, the development of an NEDL should also consider which diagnostic tests are already implemented in the country, what are the priorities of different stakeholders, and what are the practical constraints related to infrastructure, funding, human resources, etc. In 2018, WHO published the first version of the Model List of Essential In Vitro Diagnostics (<Abbreviation meaning={'Essential Diagnostics List'} abbreviation={"EDL"} />) to provide a new tool for governments to prioritize <Abbreviation meaning={'In Vitro Diagnostics'} abbreviation={"IVDs"} /> and develop an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. The <Abbreviation meaning={'Essential Diagnostics List'} abbreviation={"EDL"} /> was complemented with the <Abbreviation meaning={'World Health Organization'} abbreviation={'WHO'} /> guidance for Selection of Essential In Vitro Diagnostics at Country level in 2021. However, only few countries have developed and implemented an NEDL. There is an urgent need to assist countries with tools and technical assistance to support improving access to diagnostic services. </p>
             <p>With this tool FIND aims to increase development and implementation of NEDLs at country level and as such improve access to good quality, affordable, and appropriate diagnostic services to the entire population.</p>
            </div>

            <div className="homeToolStructure CardContainer">
                <div>
                <h3>What is the structure of the tool?</h3>
                <p>The tool divides the process of NEDL development, implementation, review and revision into six Phases (Figure 1):</p>
                <ul>
                    <li>Phase 1 consists of all the preparatory Activities required to start the process. </li>
                    <li>In Phase 2 data on prevalence and burden of diseases and conditions is collected to develop a national list of priority diseases and conditions that require diagnostic services for optimal patient care. This list will serve as the basis for the NEDL. In Phase 2 data is also collected on the current state and structure of a country’s diagnostic system, including an inventory of which IVDs and imaging technologies are already in use in the country. </li>
                    <li>Information collected in Phase 2 is used in Phase 3 to develop a draft NEDL. The performance of IVDs and imaging technologies already utilized in the country for prioritized diseases and conditions is assessed to determine whether they can be included in the NEDL. In addition, additional IVDs and imaging technologies are identified using the WHO EDL and reference publications for diagnostic imaging to ensure optimal diagnostic services for the most prevalent and high burden diseases and conditions to the entire population. </li>
                    <li>Because the success of an NEDL depends on support from key stakeholders, Phase 4 takes the draft NEDL through a stakeholder engagement process, allowing key stakeholders to provide feedback on the draft NEDL. Phase 4 ends with finalization of the NEDL and submission of the NEDL to the government for ratification or endorsement.</li>
                    <li>Phase 5 focuses on implementation of the endorsed NEDL. In this Phase, an NEDL implementation plan is developed. Countries also receive guidance on how to monitor the implementation of the NEDL. As situations differ widely between countries, the guidance provided in this Phase is necessarily high level.</li>
                    <li>Diagnostic services is a rapidly changing field and this impacts the composition of the NEDL. In addition, the WHO EDL is regularly revised. This asks for regular reviewing and updating of the NEDL. Phase 6 guides countries with establishing a continuous NEDL improvement cycle.</li>
                </ul>
                </div>
                <div className="figure1">
                <img src={overallFlowchart} alt='Overall Flowchart'/>
                <h5>Figure 1</h5>
                </div>
            </div>

            <br />
            <p>Box 1 below describes the scope of each Phase and how it relates to other Phases in more detail.</p>
            <table>
                <thead>
                    <tr>
                        <td>Scopes of the Phases of the Stepwise NEDL development and implementation tool</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><img src={phase1Figure} alt='Figure Phase 1' /></td>
                        <td>
                            <p>Phase 1 consists of preparatory Activities including establishing the governing structure and an operational plan for developing and implementing the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. </p>
                            <p>In this Phase, a National Essential Diagnostics Committee (<Abbreviation meaning={'National Essential Diagnostics Comittee'} abbreviation={'NEDC'} />) is established. The NEDC is responsible for coordinating and driving the development, implementation, review, and improvement of the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. </p>
                            <p>The <Abbreviation meaning={'National Essential Diagnostics Comittee'} abbreviation={'NEDC'} /> is supported by expert groups with implementation of specific Activities. </p>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={phase2Figure} alt='Figure Phase 2' /></td>
                        <td>
                            <p>During Phase 2 data and information necessary for developing the NEDL and an NEDL implementation plan are collected.</p>
                            <p>Through two parallel processes the country will collect (1) data on (sub)national disease prevalence and burden leading to a list of prioritized diseases and conditions that require diagnostic services for optimal patient care, and (2) information on the current state and structure of the diagnostic system and IVDs and imaging technologies already implemented.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={phase3Figure} alt='Figure Phase 3' /></td>
                        <td>
                            <p>In Phase 3, the data and information collected in Phase 2 is used to develop a draft NEDL. </p>
                            <p>The tool will assist countries with verifying whether IVDs and imaging technologies already implemented in the country can be included on the NEDL based on performance characteristics. Using the WHO EDL and reference publications for diagnostic imaging, countries will subsequently amend the list with additional IVDs and imaging technologies required for optimal diagnosis, treatment monitoring, screening and surveillance of priority diseases and conditions. </p>
                            <p>The NEDL will include allocation of diagnostic tests to the various tiers of the health system to optimize access to diagnostic services to the entire population, regardless of geographic location.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={phase4Figure} alt='Figure Phase 4' /></td>
                        <td>
                            <p>Support from key stakeholders is required for successful implementation of an NEDL. </p>
                            <p>Phase 4 consists of a stakeholder engagement process to ensure that the NEDL takes into account the priorities of the different stakeholders and stakeholder groups. </p>
                            <p>After incorporation of feedback from key stakeholders, the NEDL will be finalized and submitted to the government for ratification or endorsement.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={phase5Figure} alt='Figure Phase 5' /></td>
                        <td>
                            <p>Phase 5 focuses on assisting countries with development of an NEDL implementation plan and adaption of the National Health and Laboratory Policies and Strategic Plans if applicable and required. </p>
                            <p>This Phase will also guide countries with monitoring the implementation of the NEDL. </p>
                            <p>As situations differ widely between countries, the guidance provided in this Phase is necessarily high level.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={phase6Figure} alt='Figure Phase 6' /></td>
                        <td>
                            <p>Phase 6 describes the process that countries should follow for reviewing and updating the current NEDL. This makes the development, implementation, reviewing and updating of the NEDL a cyclical process, ensuring that the diagnostic services are continuously improving and adapting to changes. </p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>A more elaborate explanation of the Activities and Steps, and how they interrelate, is provided in the introduction of each Phase.</p>

            <h3>Next Step</h3>
            <p>Read the <Link to="/instructions">instructions</Link> for using the tool</p>
        </div>
    );
}
 
export default ToolIntro;