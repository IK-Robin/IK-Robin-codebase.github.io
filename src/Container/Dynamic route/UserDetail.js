

import { useParams } from 'react-router-dom';
import users from './userData'
const UserDetail = ({ match }) => {

    const params =useParams()
    // const { params: { userId } } = match;
    const {userId} = params;
  
    return (
      <>
        <p>
          <strong>User ID: </strong>
          {userId}
        </p>
        <p>
          <strong>User Name: </strong>
          {users[userId -1].name}
        </p>
        <p>
          <strong>User des: </strong>
          {users[userId - 1].des}
        </p>
      </>
    );
  };
  
  export default UserDetail;
