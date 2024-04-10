import logo from '../images/logo-dip_cc.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <a href='../App.js' className='no-bg' >
          {/* <img src='https://www.redurbansol.com/wp-content/uploads/2020/10/diputaciondecaceres.png' alt='' /> */}
          <img src={logo} alt='' />
        </a>

        <a href='../App.js'>Encuesta de satisfacción</a>
      </div>

      <div>
        <a href='../App.js' >Acceder</a>
      </div>
    </div>
  )
}

export default Navbar;