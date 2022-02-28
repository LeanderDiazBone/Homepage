import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className = '.header'>
           <Link to="/" id = "headerlink">Home</Link>
           <Link to="/projects" id = "headerlink">Projects</Link>
           <Link to="/blog" id = "headerlink">Blog</Link>
           <Link to="/about" id = "headerlink">About</Link>
            <a href = "https://github.com/LeanderDiazBone" ><img id="iconlink" src={ require('../images/GitHub-Logo.png') } alt="GitHub Logo"/></a>
            <a href = "https://www.linkedin.com/in/leanderdiazbone/" id="iconlink"><img id="iconlink" src={ require('../images/Linkedin-Logo.png') } alt="LinkedIn Logo"/></a>
            <a href = "" id="iconlink"><img id="iconlink" src={ require('../images/Mail-Logo.png') } alt="Mail Logo"/></a>

        </header>
    )
}

export default Header