import PhaseItemIntro from '../components/PhaseItemIntro';
import './ToolIntro.css';

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
            <h2>General Introduction</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint ratione hic quis perspiciatis laboriosam quod earum quibusdam in? Necessitatibus dicta quae quibusdam quo eos accusantium illo minima voluptatibus iste.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ipsa sunt modi aut ut quasi corporis eius architecto amet fugit quidem distinctio aliquid incidunt, ea accusamus quibusdam voluptate, vitae dolores?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolores molestiae odio architecto aut suscipit in eius ipsum rerum veniam deleniti libero iure, enim illum, debitis corrupti provident quae officiis.
            </p>
        </div>
    );
}
 
export default ToolIntro;