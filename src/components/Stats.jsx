import PropTypes from 'prop-types';
import '/src/components/Stats.css' 

function Stats(props) {

    return (
    <>
    <section className='stats'>
        <img src={props.icon} alt=""/>
        <h2>{props.statsNumber} </h2>
        <p>{props.statsDescription} </p>
    </section>
    </>
    )
}

Stats.propTypes = {
    icon: PropTypes.string,
    statsNumber: PropTypes.string,
    statsDescription: PropTypes.string
};

export default Stats