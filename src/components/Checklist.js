import "./Checklist.css"

let progress = 0;
let maxQuestions = 0;

const handleCheckbox = (e, handler) => {
    if (e.target.checked) {
        progress += 1;
    } else {
        progress -= 1;
    }
    handler(progress, maxQuestions);
}

const handleChecklistSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
}

const Checklist = ({checklist, checkHandler}) => {
    if (!(maxQuestions > 0)){
        checklist.map((checks) => (
            maxQuestions += checks.questions.length
        ));
    }

    return (
        <form className='CardContainer' onSubmit={handleChecklistSubmit}>
            <h2>Checklist</h2>
            {checklist.map((checks) => (
                <div className="checks">
                    <h3>Step: {checks.step}</h3>
                    {checks.questions.map((question) => (
                        <label><input type="checkbox" 
                        onInput={(e) => handleCheckbox(e, checkHandler)} 
                        required/>{question}</label>    
                    ))}
                </div>
                ))}
            <input type="submit" value="Next"/>
        </form>
    );
}
 
export default Checklist;