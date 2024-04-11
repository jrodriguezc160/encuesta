import logo from '../images/logo-dip_cc.png';

const Navbar = () => {
  return (
    <div>
      {/* <div className='navbar' style={{ filter: 'drop-shadow(0 4px 4px #ffffff00)' }}>
        <div>
          <a href='../App.js' className='no-bg' style={{ filter: 'drop-shadow(0 0 0 #ffffff00)' }} >
            
            <img src={logo} alt='' />
          </a>

          <a href='../App.js' style={{ filter: 'drop-shadow(0 0 0 #ffffff00)' }}>Encuesta de satisfacción</a>
        </div>

        <div>
          <a href='../App.js' style={{ filter: 'drop-shadow(0 0 0 #ffffff00)' }} >Acceder</a>
        </div>
      </div> */}

      <div className='navbar' >
        <div>
          <a href='../App.js' className='responsive' >
            <img src='https://eventos.dip-caceres.es/wp-content/uploads/2023/01/Favicon-Dip-512x512-1.png' alt='' />
          </a>

          <a href='../App.js' className='no-bg' >
            {/* <img src='https://www.redurbansol.com/wp-content/uploads/2020/10/diputaciondecaceres.png' alt='' /> */}
            <img src={logo} alt='' />
          </a>

          <a href='../App.js'>Encuesta de satisfacción</a>
          <a href='../App.js' className='responsive'>Encuesta de satisfacción</a>
          <a href='../App.js' className='responsive'>Acceder</a>
        </div>

        <div>
          <a href='../App.js' >Acceder</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;