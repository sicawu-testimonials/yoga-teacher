import { Link } from 'react-router-dom'
import { scroller } from 'react-scroll'


const ScrollLink = ({ to, children }) => {
    const handleClick = () => {
        scroller.scrollTo(to.replace('#', ''), {
            smooth: true,
            offset: 30,
        })
    }
    return (
        <Link to={to} onClick={handleClick}>
            {children}
        </Link>
    )
}

export default ScrollLink