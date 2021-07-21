import Topbar from './components/topbar/'
import Sidebar from './components/sidebar'
import Dashboard from './components/dashboard'
import Tasks from './components/tasks'
import Email from './components/email'
import EmailRecepients from './components/email/emailRecepients'
import CreateEmail from './components/createEmail'
import Contacts from './components/contacts'
import NewContact from './components/newContact'
import UserSettings from './components/userSettings'
import Settings from './components/settings'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="flex w-full bg-gray-bg">
        <Sidebar />
        <div id="mainContent" className="flex flex-col w-full h-full">
          {/* <Topbar /> */}
          <div className="flex overflow-auto h-full">
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/tasks">
                <Tasks />
              </Route>
              <Route exact path="/emails">
                <Email />
              </Route>
              <Route exact path="/createEmail">
                <CreateEmail />
              </Route>
            </Switch>

            {/* <Tasks /> */}
            {/* <Email /> */}
            {/* <EmailRecepients /> */}
            {/* <CreateEmail /> */}
            {/* <Contacts /> */}
            {/* <NewContact /> */}
            {/* <UserSettings /> */}
            {/* <Settings /> */}
          </div>
        </div>
      </div >
    </Router>

  );
}

export default App;
