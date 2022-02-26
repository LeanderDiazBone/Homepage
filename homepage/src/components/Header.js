import HeadLink from './HeadLink';

const Header = () => {
    return (
        <header className = '.header'>
           <HeadLink name = 'Home'/>
           <HeadLink name = 'Projects'/>
           <HeadLink name = 'Blog'/>
           <HeadLink name = 'About'/>
        </header>
    )
}

export default Header