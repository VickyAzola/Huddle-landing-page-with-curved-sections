//import { useState } from 'react'
import TheHeader from './components/TheHeader'
import Stats from './components/Stats'
import Card from './components/Card'
import TheFooter from './components/TheFooter'
import Button from './components/Button'
import './App.css'

function App() {


  return (
    <>
      <TheHeader />
      <div className='stats-container'>
        <Stats 
          icon="/images/icon-communities.svg"
          statsNumber="1.4k+"
          statsDescription="Communities Formed" 
        />
        <Stats 
          icon="/images/icon-messages.svg"
          statsNumber="2.7m+"
          statsDescription="Messages Sent"
        />
      </div>
      <Card
        variant="cardBlue1"
        ilustration="/images/illustration-grow-together.svg"
        cardTitle="Grow Together"
        cardDescription="Generate meaningful discussions with your audience and build a strong, loyal community. 
        Think of the insightful conversations you miss out on with a feedback form."
      />
      <Card
        variant="cardWhite"
        imgStyle="cardWhiteImg"
        ilustration="/images/illustration-flowing-conversation.svg"
        cardTitle="Flowing Conversations"
        cardDescription="You wouldn&#39;t paginate a conversation in real life, so why do it online? Our threads have 
        just-in-time loading for a more natural flow."
      />
      <Card
        variant="cardBlue2"
        ilustration="/images/illustration-your-users.svg"
        cardTitle="Your Users"
        cardDescription="It takes no time at all to integrate Huddle with your app&#39;s authentication solution. This means, 
        once signed in to your app, your users can start chatting immediately."
      />
      <section className='comunnity'>
        <h4>Ready To Build Your Community?</h4>
        <Button variant="pink" textButton="Get Started For Free" />
      </section>
      <TheFooter />
    </>
  )
}

export default App