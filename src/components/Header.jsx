import headerim from '../image/header.webp'
import './Header.css'

function Header() {
  return (
    <>
        <section>
            <img className='headerim'id='headerim' src={headerim} alt="Header Image" />
        </section>
        <section id='C'>
            <div className='intro'>
                <h1>Maison Nassiri</h1>
                <p><i>Since 1997</i></p>
            </div>
        </section>
    </>
  )
}

export default Header;
