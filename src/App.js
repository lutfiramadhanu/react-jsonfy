import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Posts from './component/Posts';
import Comments from './component/Comments'
import Users from './component/Users';


function App() {
  return (
   <BrowserRouter>
      <Switch>
          <Link path="/" exact component={Users}/>
          <Link path="/Posts" component={Posts}/>
          <Link path="/Comments" component={Comments}/>
      </Switch>
   </BrowserRouter>
  );
}

export default App;