

import {   Link, Outlet, Route, Routes, useParams} from 'react-router-dom';
import TabPage from './Tabpage';
import users from './userData'
const UserDetail = () => {


  
    const params =useParams()
    const {userName} = params;
    

    // const { params: { userId } } = match;
    //    code for dynamic route 
    // const {userId} = params;
    // return (
    //   <>
    //     <p>
    //       <strong>User ID: </strong>
    //       {userId}
    //     </p>
    //     <p>
    //       <strong>User Name: </strong>
    //       {users[userId - 1].name}
    //     </p>
    //     <p>
    //       <strong>User: </strong>
    //       {users[userId - 1].name}
    //     </p>
    //   </>
    // );

    const user = users.find(({ name }) => name === userName);
  
    return (
      <>
        <p>
          <strong>User ID test: </strong>
          {user.name}
        </p>
        <p>
          <strong>User Name: </strong>
          {user.description}
        </p>
 <div>
   

      <p>Dyanmic nested route</p>

      <ul className="unlist">
        {user.tabs.map((tab, index) => {
          return (
            <li key={index}>
              <Link to={`tab/${tab.name}`}>{tab.name}</Link>
            
            </li>
          );
        })}
      </ul>
      </div> 
      
      <Routes>
        <Route path='tab/:tabName/*'  element ={<TabPage/>} />
      </Routes>
      </>
    );
  };
  
  export default UserDetail;
