import './Footer.css';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__items__container">
          <div className="footer__help__container">
            <div className="footer__help__header">
              <h1>Help</h1>
            </div>
            <ul className="fotter__help__links">
              <li className="help__link">
                <a href="/"> Shipping</a>
              </li>
              <li className="help__link">
                <a href="/">Refund</a>
              </li>
              <li className="help__link">
                <a href="/">FAQ</a>
              </li>
              <li className="help__link">
                <a href="/">Accessiblity</a>
              </li>
            </ul>
          </div>
          <div className="footer__contact__container">
            <div className="footer__contact__header">
              <h1>Contact Us</h1>
            </div>
            <ul className="footer__contacts">
              <li className="footer__contact">
                <span>+91 8791509356</span>
              </li>
              <li className="footer__contact">
                <span>shop@xneuron.com</span>
              </li>
              <li className="footer__contact">
                <span>Gla University, Mathura</span>
              </li>
            </ul>
          </div>
          <div className="footer__social__link__container">
            <div className="footer__social__link__header">
              <h1>Stay Connected</h1>
            </div>

            <ul className="footer__social__links">
              <li className="social__link">Twitter</li>
              <li className="social__link">Instagram</li>
              <li className="social__link">Youtube</li>
              <li className="social__link">Telegram</li>
            </ul>
          </div>
        </div>
        <div className="fotter__copyright__container">
          <ul className="nav">
            <li className="footer__copyright">©2022 XNeuron Ltd. |</li>
            <li className="footer__terms__condition"> | Terms & Condition |</li>
            <li className="footer__privacy__policy">| Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// import { Link } from 'react-router-dom';
// import './Footer.css';
// // import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// // import EmailIcon from '@mui/icons-material/Email';
// // import LocationOnIcon from '@mui/icons-material/LocationOn';
// // import InstagramIcon from '@mui/icons-material/Instagram';
// // import YouTubeIcon from '@mui/icons-material/YouTube';
// // import TwitterIcon from '@mui/icons-material/Twitter';
// // import TelegramIcon from '@mui/icons-material/Telegram';
// // import PinterestIcon from '@mui/icons-material/Pinterest';
// const date = new Date().getFullYear();
// const Footer = () => {
//   return (
//     <footer className="footer bg-blue-200">
//       <div className="footer__addr">
//         <h1 className="footer__logo">Something</h1>

//         <h2>Contact</h2>

//         <address>
//           5534 Somewhere In. The World 22193-10212
//           <br />
//           <Link className="footer__btn" to="mailto:example@gmail.com">
//             Email Us
//           </Link>
//         </address>
//       </div>

//       <ul className="footer__nav">
//         <li className="nav__item">
//           <h2 className="nav__title">Media</h2>

//           <ul className="nav__ul">
//             <li>
//               <Link to="#">Online</Link>
//             </li>

//             <li>
//               <Link to="#">Print</Link>
//             </li>

//             <li>
//               <Link to="#">Alternative Ads</Link>
//             </li>
//           </ul>
//         </li>

//         <li className="nav__item nav__item--extra">
//           <h2 className="nav__title">Technology</h2>

//           <ul className="nav__ul nav__ul--extra">
//             <li>
//               <Link to="#">Hardware Design</Link>
//             </li>

//             <li>
//               <Link to="#">Software Design</Link>
//             </li>

//             <li>
//               <Link to="#">Digital Signage</Link>
//             </li>

//             <li>
//               <Link to="#">Automation</Link>
//             </li>

//             <li>
//               <Link to="#">Artificial Intelligence</Link>
//             </li>

//             <li>
//               <Link to="#">IoT</Link>
//             </li>
//           </ul>
//         </li>

//         <li className="nav__item">
//           <h2 className="nav__title">Legal</h2>

//           <ul className="nav__ul">
//             <li>
//               <Link to="#">Privacy Policy</Link>
//             </li>

//             <li>
//               <Link to="#">Terms of Use</Link>
//             </li>

//             <li>
//               <Link to="#">Sitemap</Link>
//             </li>
//           </ul>
//         </li>
//       </ul>

//       <div className="legal">
//         <p>&copy; {date} Something. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
