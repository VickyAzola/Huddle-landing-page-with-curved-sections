import PropTypes from 'prop-types';
import '/src/components/Card.css'
import { useEffect, useState } from 'react';

function Card(props) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        function watchWidth() {
            setWindowWidth(window.innerWidth)
            console.log(window.innerWidth)
        }

        window.addEventListener("resize", watchWidth)

        return function() {
            window.removeEventListener("resize", watchWidth)
        }
    }, [])


    const cardStyle = {
        cardWhite: {
            padding: windowWidth < "700" ? "7rem 0 12rem" : "10rem 0 13rem",
            backgroundColor: "white",
            backgroundImage: windowWidth < "700" ? 
            "url('/images/bg-section-top-mobile-2.svg'), url('/images/bg-section-bottom-mobile-1.svg')" 
            :
            "url('/images/bg-section-top-desktop-2.svg'), url('/images/bg-section-bottom-desktop-1.svg')",
            backgroundPosition: "bottom -1% center, top -1% center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            borderTop: "1px solid #f6fbff",
        },
        cardBlue1: {
            padding: "1rem 0 2rem",
            backgroundColor: "rgba(246, 251, 255, 1)",
            
        },
        cardBlue2: {
            paddingBottom: "4rem",
            backgroundColor: "rgba(246, 251, 255, 1)",
        }
    }

    const cardImgStyle = {
        cardWhiteImg: {
            order: "0",
        }
        
    }

    return (
    <>
    <section className='card' style={cardStyle[props.variant]}>
        <img className='cardImg' style={cardImgStyle[props.imgStyle]} src={props.ilustration} alt="ilustration" />
        <div className='cardText'>
            <h3>{props.cardTitle} </h3>
            <p className='description'>{props.cardDescription} </p>
        </div>
    </section>
    </>
    )
}

Card.propTypes = {
    variant: PropTypes.string,
    imgStyle: PropTypes.string,
    ilustration: PropTypes.string,
    cardTitle: PropTypes.string,
    cardDescription: PropTypes.string
};

export default Card
