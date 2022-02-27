import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className = '.header'>
           <Link to="/" id = "headerlink">Home</Link>
           <Link to="/projects" id = "headerlink">Projects</Link>
           <Link to="/blog" id = "headerlink">Blog</Link>
           <Link to="/about" id = "headerlink">About</Link>
        </header>
    )
}

export default Header