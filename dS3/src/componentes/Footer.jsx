import 'font-awesome/css/font-awesome.min.css';//importamos lo nuevo 
import '../estilos/Footer.css'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} DS3.El que te saca el estrés</p>
            <div>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-instagram" style={{ fontSize: '24px', margin: '0 10px' }}></i>
                </a>
                <a href="mailto:example@example.com">
                    <i className="fa fa-envelope" style={{ fontSize: '24px', margin: '0 10px' }}></i>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
