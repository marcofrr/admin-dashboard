import Topbar from './components/topbar/'
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
import Navbar from './components/navbar'
function App() {
  return (
    <Router>
      <div className="flex w-full bg-gray-bg">
        <Navbar />
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
              <Route exact path="/email">
                <Email />
              </Route>
              <Route exact path="/createEmail">
                <CreateEmail />
              </Route>
              <Route exact path="/contacts">
                <Contacts />
              </Route>
              <Route exact path="/newContact">
                <NewContact />
              </Route>
              <Route exact path="/userSettings">
                <UserSettings />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
            </Switch>
          </div>
        </div>
      </div >
    </Router>

  );
}

export default App;
