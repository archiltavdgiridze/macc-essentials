import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      {/* div / div / div / div */}
      {/*          div          */}
      <div className="footer_links">
        <div className="footer_cont">
          <h1 className="footer_brand">
            Macc <span>Essentials</span>
          </h1>
        </div>
        <div className="footer_cont">
          <ul>
            <li>Home</li>
            <li>Collection</li>
            <li>Products</li>
          </ul>
        </div>
        <div className="footer_cont">
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="footer_cont subscribe">
          <div className='subscribe_text'>  
            <p>
              Be the first to know about our biggest and best sales. We'll never
              send more than one email a month.
            </p>
          </div>
          <div className='subscribe_email'>          
            <input className='email_placeholder' placeholder="ENTER YOUR EMAIL" type="" name="" value="" />
          </div>
          <hr className='email_hr' />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="all_rights">
        <p>All rights are reserved</p>
      </div>
    </div>
  );
}

export default Footer