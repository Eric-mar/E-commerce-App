import { NavLink } from 'react-router-dom'


function Home() {
  return (
    <>
    <div className='bg-green-500 p-6 flex space-between   '>
        <NavLink to='/'         
        className={({isActive})=>isActive ? "bg-gray-400 flex-1 text-center ": "text-gray-500" }> Home </NavLink>
        <NavLink to='/category' 
        className='m-4  hover:text-2md flex-1 hover:text-white hover:bg-amber-500 '> Category </NavLink>
        <NavLink to='/sighnup'  
        className='m-4  hover:text-2md flex-1 hover:text-white hover:bg-amber-500 '> sighn up </NavLink>
        <NavLink to='/login'    
        className='m-4  hover:text-2md flex-1 hover:text-white hover:bg-amber-500 '> Login </NavLink>
       
    </div>
    <div>
      
    </div>
    </>
  )
}

export default Home