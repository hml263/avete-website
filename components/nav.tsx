import { Link, animateScroll as scroll} from 'react-scroll'

const menu = [
    {
        name:'mission',
        href: '#mission'
    },
    {
        name:'product',
        href: '#product'
    },
    {
        name:'blog',
        href: '#blog'
    },
    {
        name:'company',
        href: '#company'
    },
    {
        name:'contact',
        href: '#contact'
    },

]

const Nav = () => {
  return (
   <nav className='flex gap-8'>
    {menu.map((item, index) => (
        <Link to={item.href} spy={true} smooth={true} key={index} 
        className='cursor-pointer capitalize'>
            <span className='pb-2 transition-all hover:border-b-2 hover:border-yellow hover:text-yellow'>{item.name}</span>

        </Link>
    ))}
   </nav>
  )
}

export default Nav