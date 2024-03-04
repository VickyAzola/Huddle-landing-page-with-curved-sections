import '/src/components/TheFooter.css'
import LogoWhite from '/images/LogoWhite.svg'
import PhoneIcon from '/images/icon-phone.svg'
import EmailIcon from '/images/icon-email.svg'
import Social from '/src/components/Social.jsx'
import TheCredits from '/src/components/TheCredits'
import Button from './Button'
import { useState } from 'react'

function TheFooter() {

    const [email, setEmail] = useState("")
    const [errorMsg, setErrorMsg] = useState(null)

    function isEmailValid(email) {
        return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    }

    function handleChange(event) {
        const emailSubmited = event.target.value
        setEmail(emailSubmited)
        setErrorMsg(null);
    }

    function handleSubmit(event) {
        event.preventDefault();
    
        setErrorMsg(null);
    
        if (isEmailValid(email)) {
            alert('Thanks for subscribing');
        } else {
            setErrorMsg('Check your email please');
        }
    }

    return (
    <>
    <footer>
        <div className='footer-section'>
        <section className='newsletter'>
            <h5>NEWSLETTER</h5>
            <p>To recieve tips on how to grow your community, sign up to our weekly newsletter. We&#39;ll never 
            send you spam or pass on your email address</p>
            <form id="form" onSubmit={handleSubmit}>
                <input 
                    id="email" 
                    name="email"
                    value={email}
                    onChange={handleChange} 
                    type='email' 
                    placeholder='example@gmail.com' />
                <Button variant="subscribe" textButton="Subscribe" />
            </form>
            {errorMsg && <p className='error-msg'>{errorMsg}</p>}
        </section>

        <section className='contact-section'>
            <img className='logoWhite' src={LogoWhite} alt="Logo" />
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia 
            vestibulum a, ultrices quis sem.</p>
            <div className='contact'>
                <div className='phone'>
                    <img src={PhoneIcon} alt=""/>
                    <p>Phone: +1-543-123-4567</p>
                </div>
                <div className='email'>
                    <img src={EmailIcon} alt=""/>
                    <p>example@huddle.com</p>
                </div>
            </div>
            <Social />
        </section>
        </div>
        <TheCredits />
    </footer>
    </>
    )
}

export default TheFooter