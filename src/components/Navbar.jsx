import logo from '../images/logo-dip_cc.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <a href='' >
          {/* <img src='https://www.redurbansol.com/wp-content/uploads/2020/10/diputaciondecaceres.png' alt='' /> */}
          <img src={logo} alt='' />
        </a>

        <a href=''>Encuesta de satisfacción</a>
      </div>

      <div>
        <a href='' >Acceder</a>
      </div>
    </div>
  )
}

export default Navbar;