import './ToolIntro.css';
import { Link } from 'react-router-dom';
import Abbreviation from '../components/Abbreviation';
import PhaseItemIntro from '../components/PhaseItemIntro';
import overallFlowchart from '../media/home/Overall flowchart.png';
import phase1Figure from '../media/home/Phase 1 flowchart.png';
import phase2Figure from '../media/home/Phase 2 flowchart.png';
import phase3Figure from '../media/home/Phase 3 flowchart.png';
import phase4Figure from '../media/home/Phase 4 flowchart.png';
import phase5Figure from '../media/home/Phase 5 flowchart.png';
import phase6Figure from '../media/home/Phase 6 flowchart.png';
import phase7Figure from '../media/home/Phase 7 flowchart.png';
import useContent from '../useContent.js';

const ToolIntro = () => {

    const query = `
    {
        homeElementCollection(order:id_ASC){
            items {
                id
                cardView
                itemText {
                    json
                }
            }
        }
    }
    `;

    const {content, isPending, error} = useContent(query);

    return (
        <div className="introContent">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {content && <div>
                <div className="phases">
                    <PhaseItemIntro phaseId={1} progress={0} />
                    <PhaseItemIntro phaseId={2} progress={0} />
                    <PhaseItemIntro phaseId={3} progress={0} />
                    <PhaseItemIntro phaseId={4} progress={0} />
                    <PhaseItemIntro phaseId={5} progress={0} />
                    <PhaseItemIntro phaseId={6} progress={0} />
                    <PhaseItemIntro phaseId={7} progress={0} />
                </div>

                <h1>Introduction to the NEDL e-Tool</h1>

                {/* {content.data.homeElementCollection.items.map((element) => (
                    <div className={element.cardView ? 'CardContainer' : 'startElement'} key={element.id}>
                        {element.itemText.json.content.map((item, index) => (
                            <RichTextRecursive {...item} key={`${element.id}-${index}`} />
                        ))}
                    </div>
                ))} */}
            </div>}

            
             <div className="CardContainer">
             <p><b>
             Welcome to the Foundation for Innovative New Diagnostics (<Abbreviation meaning={'Foundation for Innovative New Diagnostics'} abbreviation={'FIND'} />)
             e-tool for Stepwise Development and Implementation of a National Essential Diagnostics List (<Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />), or in short: the FIND NEDL e-tool!
             </b></p>
             <p>The Lancet Commission on Diagnostics found that 47% of the global population has little or no
                access to diagnostics. Access to good quality, affordable, and appropriate health products is
                indispensable to advance universal health coverage (<Abbreviation meaning={'universal health coverage'} abbreviation={'UHC'}/>), address health emergencies, and
                promote healthier populations. Many countries have adopted and are implementing essential health
                packages as a means for progressing towards <Abbreviation meaning={'universal health coverage'} abbreviation={'UHC'}/>. However, diagnostics are often inadequately
                covered by these packages. Instead, countries utilize documents that are often not backed by data
                on national disease prevalence and burden to define which tests should be made available at
                different tiers of the health system. The World Health Organization (<Abbreviation meaning={'World Health Organization'} abbreviation={"WHO"} />) therefore recommends that countries develop an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. </p>
             </div>

             <div className="CardContainer">
             <h3>What is an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />?</h3>
             <p>An <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> highlights which diagnostic tests must be prioritized and made available throughout the
                country based on in-country disease prevalence and burden. It is meant to be a tool to trigger
                commitment and investment in diagnostic services to improve diagnosis, treatment monitoring,
                screening, and surveillance. Implementation of an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> should drive both diagnostic facility
                strengthening as well as diagnostic networks and systems strengthening. </p>
             </div>
             
             <div className="CardContainer">
             <h3>What is the <Abbreviation meaning={'Foundation for Innovative New Diagnostics'} abbreviation={'FIND'} /> <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> e-tool?</h3>
             <p>The <Abbreviation meaning={'Foundation for Innovative New Diagnostics'} abbreviation={'FIND'} /> <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> e-tool
              provides a stepwise roadmap to guide countries on a daily basis with developing and implementing an evidence-based <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> that includes both essential In Vitro Diagnostics (<Abbreviation meaning={'In Vitro Diagnostics'} abbreviation={"IVDs"} />) and essential Imaging Technologies allocated to different tiers of the health system. </p>
             </div>

            <div className="CardContainer">
            <h3>Why was this tool developed?</h3>
             <p>The development and implementation of an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> may be challenging. In an ideal world,
                diagnostic tests can be implemented for all diseases and conditions. In reality, there are many
                limitations, requiring countries to prioritize diseases and conditions to be covered by the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />.
                There are many global lists of priority diseases and conditions, but data on in-country disease
                prevalence and burden are often scarce. This puts the countries in a tension field between on the
                one hand competing global lists for priority diseases, conditions, pathogens and diagnostic services,
                and on the other hand a scarcity of data on in-country diseases prevalence and burden. In addition,
                the development of an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> should also consider which diagnostic tests are already
                implemented in the country, what are the priorities of different stakeholders, and what are the
                practical constraints related to infrastructure, funding, human resources, etc. In 2018, <Abbreviation meaning={'World Health Organization'} abbreviation={"WHO"} />
                published the first version of the Model List of Essential In Vitro Diagnostics (<Abbreviation meaning={'Essential Diagnostics List'} abbreviation={'EDL'} />) to provide a
                new tool for governments to prioritize <Abbreviation meaning={'In Vitro Diagnostics'} abbreviation={"IVDs"} /> and develop an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. The <Abbreviation meaning={'Essential Diagnostics List'} abbreviation={'EDL'} /> was
                complemented with the <Abbreviation meaning={'World Health Organization'} abbreviation={"WHO"} /> guidance for Selection of Essential In Vitro Diagnostics at Country
                level in 2021. However, only few countries have developed and implemented an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. There is
                an urgent need to assist countries with tools and technical assistance to support improving access to
                diagnostic services. </p>
             <p>With this tool <Abbreviation meaning={'Foundation for Innovative New Diagnostics'} abbreviation={'FIND'} /> aims to increase development and implementation of <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />s at country level and as such improve access to good quality, affordable, and appropriate diagnostic services to the entire population.</p>
            </div>

            <div className="homeToolStructure CardContainer">
                <div>
                <h3>What is the structure of the tool?</h3>
                <p>The tool divides the process of <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> development, implementation, review and revision into seven Phases (Figure 1):</p>
                <ul>
                    <li><a href={`/tool/phase/1/activity/0/step/0`}>Phase 1</a> consists of all the preparatory Activities required to start the process. </li>
                    <li>In <a href={`/tool/phase/2/activity/0/step/0`}>Phase 2</a> data on prevalence and burden of diseases and conditions is collected to
                        develop a national list of priority diseases and conditions that require diagnostic services for
                        optimal patient care. This list will serve as the basis for the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. </li>
                    <li>In <a href={`/tool/phase/3/activity/0/step/0`}>Phase 3</a> data is collected on the current state and structure of a country’s diagnostic
                        system, including an inventory of which <Abbreviation meaning={'In Vitro Diagnostics'} abbreviation={"IVDs"} /> and imaging technologies are already in use
                        in the country. </li>
                    <li>In <a href={`/tool/phase/4/activity/0/step/0`}>Phase 4</a> the information collected in <a href={`/tool/phase/2/activity/0/step/0`}>Phase 2</a> and <a href={`/tool/phase/3/activity/0/step/0`}>Phase 3</a> is used to develop a draft <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. <Abbreviation meaning={'In Vitro Diagnostics'} abbreviation={"IVDs"} /> and imaging technologies already used in the country
                        for prioritized diseases and conditions is assessed to determine whether they can be
                        included in the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. In addition, additional <Abbreviation meaning={'In Vitro Diagnostics'} abbreviation={"IVDs"} /> and imaging technologies are
                        identified using the <Abbreviation meaning={'World Health Organization'} abbreviation={"WHO"} /> EDL and reference publications for diagnostic imaging to
                        ensure optimal diagnostic services for the most prevalent and high burden diseases and
                        conditions to the entire population.</li>
                    <li>Because the success of an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> depends on support from key stakeholders, <a href={`/tool/phase/5/activity/0/step/0`}>Phase 5</a>
                        takes the draft <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> through a stakeholder engagement process to allow key
                        stakeholders to provide feedback on the draft <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. <a href={`/tool/phase/5/activity/0/step/0`}>Phase 5</a> ends with finalization of
                        the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> and submission of the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> to the government for ratification or
                        endorsement.</li>
                    <li><a href={`/tool/phase/6/activity/0/step/0`}>Phase 6</a> focuses on implementation of the endorsed <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. In this Phase, an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> implementation plan is developed. Countries also receive guidance on how to monitor the
                        implementation of the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. As situations differ widely between countries, the guidance
                        provided in this Phase is necessarily high level.</li>
                        <li>Diagnostic services is a rapidly changing field and this impacts the composition of the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. In addition, the <Abbreviation meaning={'World Health Organization'} abbreviation={"WHO"} /> EDL is regularly revised. This asks for regular reviewing
                        and updating of the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. <a href={`/tool/phase/7/activity/0/step/0`}>Phase 7</a> guides countries with establishing a continuous <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> improvement cycle.</li>
                </ul>
                </div>
                <div className="figure1">
                <img src={overallFlowchart} alt='Overall Flowchart'/>
                <h5>Figure 1 : The Stepwise <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> development and implementation tool is divided into seven Phases and includes a continuous improvement cycle</h5>
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
                            <p><a href={`/tool/phase/1/activity/0/step/0`}>Phase 1</a> consists of
                            preparatory Activities including
                            establishing the governing
                            structure and an operational
                            plan for developing and
                            implementing the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />.</p>
                            <p>In this Phase, a National
                            Essential Diagnostics
                            Committee (<Abbreviation meaning={'National Essential Diagnostics Committee'} abbreviation={'NEDC'} />) is
                            established. The <Abbreviation meaning={'National Essential Diagnostics Committee'} abbreviation={'NEDC'} /> is
                            responsible for coordinating
                            and driving the development,
                            implementation, review, and
                            improvement of the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />.</p>
                            <p>The <Abbreviation meaning={'National Essential Diagnostics Comittee'} abbreviation={'NEDC'} /> is supported by expert groups with implementation of specific Activities. </p>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={phase2Figure} alt='Figure Phase 2' /></td>
                        <td>
                            <p>A list of priority diseases and
                            conditions lies at the basis of
                            the NEDL. In <a href={`/tool/phase/2/activity/0/step/0`}>Phase 2</a> data on
                            (sub)national disease
                            prevalence and burden are
                            collected to develop a list of
                            prioritized diseases and
                            conditions that require
                            diagnostic services for optimal
                            patient care.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={phase3Figure} alt='Figure Phase 3' /></td>
                        <td>
                            <p>In <a href={`/tool/phase/3/activity/0/step/0`}>Phase 3</a> data and
                            information necessary for
                            developing the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> and an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> implementation plan
                            are collected. Information will
                            be collected on the current
                            state and structure of the
                            diagnostic system and <Abbreviation meaning={'In Vitro Diagnostics'} abbreviation={"IVDs"} /> and imaging technologies
                            already implemented and used
                            in the country.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={phase4Figure} alt='Figure Phase 4' /></td>
                        <td>
                            <p>In <a href={`/tool/phase/4/activity/0/step/0`}>Phase 4</a>, the data and
                            information collected in <a href={`/tool/phase/2/activity/0/step/0`}>Phase 2</a> and <a href={`/tool/phase/3/activity/0/step/0`}>Phase 3</a> is
                            used to develop a draft <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />.</p>
                            <p>The tool will assist countries
                            with verifying whether <Abbreviation meaning={'In Vitro Diagnostics'} abbreviation={"IVDs"} /> and imaging technologies
                            already implemented in the
                            country can be included on the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> based on performance
                            characteristics. Using the <Abbreviation meaning={'World Health Organization'} abbreviation={"WHO"} /> EDL and reference
                            publications for diagnostic
                            imaging, countries will
                            subsequently amend the list
                            with additional <Abbreviation meaning={'In Vitro Diagnostics'} abbreviation={"IVDs"} /> and
                            imaging technologies required
                            for optimal diagnosis, treatment
                            monitoring, screening and
                            surveillance of priority diseases
                            and conditions.</p>
                            <p>The <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> will include
                            allocation of diagnostic tests to
                            the various tiers of the health
                            system to optimize access to
                            diagnostic services to the entire
                            population, regardless of
                            geographic location.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={phase5Figure} alt='Figure Phase 5' /></td>
                        <td>
                            <p>Support from key stakeholders
                            is required for successful
                            implementation of an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />.</p>
                            <p><a href={`/tool/phase/5/activity/0/step/0`}>Phase 5</a> consists of a
                            stakeholder engagement
                            process to ensure that the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> takes into account the
                            priorities of the different
                            stakeholders and stakeholder
                            groups.</p>
                            <p>After incorporation of feedback
                            from key stakeholders, the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> will be finalized and
                            submitted to the government
                            for ratification or endorsement.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={phase6Figure} alt='Figure Phase 6' /></td>
                        <td>
                            <p><a href={`/tool/phase/6/activity/0/step/0`}>Phase 6</a> focuses on assisting
                        countries with development of
                        an <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> implementation
                        plan and adaption of the
                        National Health and Laboratory
                        Policies and Strategic Plans if
                        applicable and required.</p>
                        <p>This Phase will also guide
                        countries with monitoring the
                        implementation of the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />.
                        </p>
                        <p>As situations differ widely
                        between countries, the
                        guidance provided in this Phase
                        is necessarily high level.</p>
                        </td>
                    </tr>
                    <tr>
                        <td><img src={phase7Figure} alt='Figure Phase 7' /></td>
                        <td>
                            <p><a href={`/tool/phase/7/activity/0/step/0`}>Phase 7</a> describes the process
                            that countries should follow for
                            reviewing and updating the
                            current <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} />. This makes
                            the development, implementation, reviewing and
                            updating of the <Abbreviation meaning={'National Essential Diagnostics List'} abbreviation={'NEDL'} /> a
                            cyclical process, ensuring that
                            the diagnostic services are
                            continuously improving and
                            adapting to changes.</p>
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