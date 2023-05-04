import './Footer.css';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import EmailIcon from '@mui/icons-material/Email';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import TelegramIcon from '@mui/icons-material/Telegram';
// import PinterestIcon from '@mui/icons-material/Pinterest';
const date = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <footer className="footer bg-blue-900 rounded">
        <div className="footer__addr">
          <h1 className="footer__logo text-black-900 font-bold">Something</h1>

          <h2 className="text-black-900 font-bold ">Contact</h2>

          <address>
            5534 Somewhere In. The World 22193-10212
            <br />
            <a className="footer__btn" href="mailto:example@gmail.com">
              Email Us
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title text-black-900 font-bold">Media</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>

              <li>
                <a href="#">Print</a>
              </li>

              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>

          <li className="nav__item nav__item--extra">
            <h2 className="nav__title text-black-900 font-bold">Technology</h2>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Hardware Design</a>
              </li>

              <li>
                <a href="#">Software Design</a>
              </li>

              <li>
                <a href="#">Digital Signage</a>
              </li>

              <li>
                <a href="#">Automation</a>
              </li>

              <li>
                <a href="#">Artificial Intelligence</a>
              </li>

              <li>
                <a href="#">IoT</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title text-black-900 font-bold">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; {date} Something. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
