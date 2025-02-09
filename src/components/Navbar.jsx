import './Navbar.css'
import Logo from '../image/logo.png'
import lepanier from '../image/panier.png'

function Nav() {


  return (
    <>
    <section>
        <div className='lanav' >
            <a href=""><img className='logonav' id="logonav" src={Logo} alt="" /></a>
              <div className='les_link_nav' >
                <a href="">Acceuil</a>
                <a href="#Contactt">Contacte</a>
                <a href="#Aboutt">About us</a>
              </div> 
            <a href=""><img className='le_panier_im' src={lepanier} alt="" /></a>
        </div>
    </section>


    </>
  )
}

export default Nav
