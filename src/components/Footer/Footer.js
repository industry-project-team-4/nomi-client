import './Footer.scss';

export default function Footer(){
    return (
        <footer className='footer'>
            <ul className='footer__list'>
                <li className='footer__item'><a className='footer__link' href="#">Refund Policy</a></li>
                <li className='footer__item'><a className='footer__link' href="#">Shipping Policy</a></li>
                <li className='footer__item'><a className='footer__link' href="#">Privacy Policy</a></li>
                <li className='footer__item'><a className='footer__link' href="#">Terms of Services</a></li>
            </ul>
        </footer>
    );
}