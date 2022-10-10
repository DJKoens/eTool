const Abbreviation = ({abbreviation, meaning}) => {
    return (
        <span className='tooltip' data-tooltip={meaning}>{abbreviation}</span>
    );
}
 
export default Abbreviation;