import { NavLink } from 'react-router-dom'


function Home() {
  return (
    <>
   <div className='shadow-2xl p-6 flex space-between   '>
        <NavLink to='/'         
        className={({isActive})=>isActive ? "bg-gray-400 flex-1 text-center ": "text-gray-500" }> Home </NavLink>

        <NavLink to='/categories' 
        className='m-4  hover:text-2md flex-1 hover:text-white hover:bg-amber-500 '  > Categories </NavLink>

        <NavLink to='/products'  
        className='m-4  hover:text-2md flex-1 hover:text-white hover:bg-amber-500 '> Products </NavLink>

        <NavLink to='Logout'    
        className='m-4  hover:text-2md flex-1 hover:text-white hover:bg-amber-500 '> LogOut </NavLink>
       
    </div>
    <div>

    </div>
    </>
  )
}

export default Home