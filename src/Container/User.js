import { useParams, } from "react-router-dom";

function User() {
  let user=[
    {name:'anil',id:1, text:' This is my user id text page'},
    {name:'peter',id:2,text:' This is my user id text page'},
    {name:'bruce',id:3,text:' This is my user id text page'},
    {name:'tony',id:4,text:' This is my user id text page'},
  ]
    const params = useParams();

    const {userId, userName} = params
    const element = user.find(el => el === userId);
   

  return (
    <>
      <h1> My name is {userName} </h1>
      <h1> This is user id  {userId} </h1>
     <div>
      des
     {element ? <p>{element.text}</p> : null}
     </div>
    </>
  );
}

export default User;
