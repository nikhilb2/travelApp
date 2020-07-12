import React from 'react'
import NavLogin from '../components/navigation/navLogin'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'


import Footer from '../components/common/footer'



const HomePage = (props: any) => {
  const {  user } = props
  return (
    <div>
      <NavLogin user={user} />
      <NavBar />
      <MiniNav />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8728.063621744146!2d77.03217768414869!3d28.61435866375635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0311d756f92f%3A0x8a547d40eb701049!2sBook%20My%20Chhutti!5e0!3m2!1sen!2sua!4v1594568564638!5m2!1sen!2sua" width='100%' height="450" frameBorder={0} style={{border: 0}} allowFullScreen={false} aria-hidden={false} tabIndex={0} />
      <Footer />
    </div>
  )
}

export default HomePage
