import '/src/components/TheHeader.css'
import Button from './Button.jsx'
import Logo from '/images/logo.svg'
import Devices from '/images/screen-mockups.svg'

function TheHeader() {

    return (
    <>
    <header>
        <nav>
            <img className='logo' src={Logo} alt=""/>
            <Button 
                variant="white" 
                textButton="Try it free" />
        </nav>
        <section>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>Huddle re-imagines the way we build communities. You have a voice, but so does 
            your audience. Create connections with your users as you engage in genuine discussion.</p>
            <Button 
                variant="pink"
                textButton="Get Started For Free"/>
            <img className='devices' src={Devices} alt=""/>
        </section>
    </header>
    </>
    )
}

export default TheHeader