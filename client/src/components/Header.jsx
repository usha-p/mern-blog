import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { Link ,useLocation,useNavigate} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {FaMoon,FaSun} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import { toggleTheme } from '../redux/theme/themeSlice'
import { signOutSuccess } from '../redux/user/userSlice'
import { useEffect } from 'react'
export default function Header() {
    const path=useLocation().pathname;
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch=useDispatch();
    const {currentUser}=useSelector(state=>state.user)

    const {theme}=useSelector((state)=>state.theme)
    const [searchTerm,setSearchTerm]=useState('')
    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
          setSearchTerm(searchTermFromUrl);
        }
      }, [location.search]);
    

    const handleSignOut=async()=>{
        try {
          const res=await fetch('/api/user/signout',{
            method:'POST',

          })  
          const data=await res.json();
          if(!res.ok){
            console.log(data.message)
          }
          else{
dispatch(signOutSuccess())
          }
        } catch (error) {
            console.log(error.message)
        }
    }
    //bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white
    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
      };
  return (
    <Navbar className='border-b-2'>
<Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
    <span className=' bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-l px-5 py-2.5 text-center me-2 mb-2 text-white'>Usha's</span>
    Blog
    </Link>
    <form onSubmit={handleSubmit}>
      <TextInput
      type="text"
      placeholder="Serach.."
      rightIcon={AiOutlineSearch}
      className='hidden lg:inline'
      value={searchTerm}
      onChange={(e)=>setSearchTerm(e.target.value)}
      />
    </form>
    <Button className='w-12 h-10 lg:hidden'color='gray' pill>
        <AiOutlineSearch/>
    </Button>
    <div className='flex gap-2 md:order-2'>
        <Button className='w-12 h-10 hidden sm:inline' color='gray' pill onClick={()=>dispatch(toggleTheme())}>
            {
                theme==='light'?<FaSun/>:<FaMoon/>
            }
            
        </Button>
        {currentUser?(
            <Dropdown
            arrowIcon={false}
            inline
            label={
                
                <Avatar
                alt='user'
        
                img ={currentUser.profilePicture} 
               
                rounded
                />
            }>
<Dropdown.Header>
<span className='block text-sm'>@{currentUser.username}</span>
              <span className='block text-sm font-medium truncate'>
                {currentUser.email}
              </span>

</Dropdown.Header>
<Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
<Dropdown.Divider/>
<Dropdown.Item onClick={handleSignOut}>Sign out</Dropdown.Item>
            </Dropdown>

        ):
        (
            <Link to='/sign-in'>
            <Button className='bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 rounded' outline>
                Sign In
            </Button>
        </Link>
         )}
       
        <Navbar.Toggle/>
    </div>
    <Navbar.Collapse>
            <Navbar.Link active={path==='/'} as={'div'}>
                <Link to="/">Home</Link>

            </Navbar.Link>
            <Navbar.Link active={path==="/about"} as={'div'}>
                <Link to="/about">About</Link>
                
            </Navbar.Link>
            <Navbar.Link active={path==='/projects'} as={'div'}> 
                <Link to="/projects">Projects</Link>
                
            </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
  )
}
