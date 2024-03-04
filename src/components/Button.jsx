import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

function Button(props) {

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

    let buttonStyle = {
        pink: {
            color: "white",
            backgroundColor: "hsl(322, 100%, 66%)",
            padding: windowWidth < "700" ? ".8rem 2rem" : "1rem 3rem",
            border: "none",
            borderRadius: "2rem",
            fontWeight: "bold",
            cursor: "pointer",
        },
        white: {
            color: "hsl(322, 100%, 66%)",
            backgroundColor: "white",
            padding: ".3rem 1rem",
            border: "1px solid hsl(322, 100%, 66%)",
            borderRadius: "2rem",
            fontWeight: "bold",
            cursor: "pointer",
        },
        subscribe: {
            color: "white",
            backgroundColor: "hsl(322, 100%, 66%)",
            padding: ".8rem 2.5rem",
            border: "none",
            borderRadius: ".2rem",
            fontWeight: "bold",
            float: "right",
            cursor: "pointer",
        },
    }

    return (
    <>
        <button style={buttonStyle[props.variant]}>
            {props.textButton} 
        </button>
    </>
    )
}

Button.propTypes = {
    textButton: PropTypes.string,
    variant: PropTypes.string
};

export default Button