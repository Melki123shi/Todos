import { useContext } from 'react';
import Loginstatus from './auth/Loginstatus'
import TaskContexts from './task/taskContext';

const NavBar = () => {
  const {tasks} = useContext(TaskContexts);
  return (
    <nav className='d-flex justify-content-between mx-3 mt-3'>
        <div className="bg-primary px-2 rounded text-white">{tasks.length}</div>
        <Loginstatus />
    </nav>
  )
}

export default NavBar