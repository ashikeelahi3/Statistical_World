import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;

  return (
    <Navbar className='border-b-2 py-2 px-0'>
      <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Statistical</span>
        World
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
          <FaMoon />
        </Button>
        <Link to="/signin">
          <Button gradientDuoTone='purpleToBlue' outline >
            Sign In
          </Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/" || path ==="/home"} as={'div'}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/notes"} as={'div'}>
          <Link to="/notes">Notes</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/programming"} as={'div'}>
          <Link to="/programming">Programming</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/dashboard"} as={'div'}>
          <Link to="/dashboard">Dashboard</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
