import users from './userData'

import { useParams, Outlet } from 'react-router-dom';

const TabPage = () => {
    // we get the params - userName and tabName from match props
    const params = useParams();
    const { userName, tabName} = params
  
    // find the tab using both the params
    const tab = users.find(({ name }) => name === userName).tabs.find(({ name }) => name === tabName);
  
    // Show the content for that particular tab
    return (
      <div>
        <h1> TabPage</h1>
        Tab Name: <strong>{tab.name}</strong>
        <h6>Tab content: </h6>
        <ul>
          {Object.keys(tab.content).map((key, index) => {
            return (
              <li key={index}>
                <span>{key} : </span>
                <strong>{tab.content[key]}</strong>
              </li>
            );
          })}
        </ul> 
       

      </div>
    );
  };
  export default TabPage;