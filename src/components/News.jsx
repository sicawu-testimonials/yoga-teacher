import { FaInstagram, FaFacebook } from 'react-icons/fa'

function News() {
    return (
        <div id="news">
            <h2>Stay up to Date</h2>
            <p>Follow us on Instagram and Facebook to see what's currently going on. We keep those channels up to date. </p>
            <div className="footer-icons">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="news-icon">
                    <FaInstagram size={40} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="news-icon">
                    <FaFacebook size={40} />
                </a>
            </div>
        </div>
    )
}

export default News