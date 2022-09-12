
import React from 'react'
import { Link,useNavigate} from 'react-router-dom'

function CodePage() {
  const navigate = useNavigate();
  let user=[
    {name:'anil',id:1, text:' This is my user id text page'},
    {name:'peter',id:2,text:' This is my user id text page'},
    {name:'bruce',id:3,text:' This is my user id text page'},
    {name:'tony',id:4,text:' This is my user id text page'},
  ]
  return (
    <div className="App">
      <h1>React Dynamic Routing</h1>
      
      {
        user.map((item)=>
      // <div div key={item} ><Link  to={`user/${item.id}/${item.name}`}>{item.name}</Link></div>)
      <div onClick={() => navigate (`user/${item.id}/${item.name}/text`)}  key={item} >

<Link  to={`user/${item.id}/${item.name}/text`}> {item.name} </Link> 

      </div>)
      }
     
    {/* <Routes>
        <Route path={`/user`} element={<User/>} />
    </Routes> */}
       

    </div>
    
  );
}
export default CodePage



















;