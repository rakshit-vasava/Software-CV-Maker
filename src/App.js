import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import CvList from "./components/cvs/CvList";
import TemplateList from "./components/templates/TemplateList";
import CreateCV from "./components/cvs/CreateCv";
import CvEditor from "./components/cvs/CvEditor";
import Feedback from "./components/layout/Feedback";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <DndProvider backend={Backend}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/cvlist" component={CvList} />
            <Route exact path="/templatelist" component={TemplateList} />
            <Route exact path="/createcv" component={CreateCV} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/feedback" component={Feedback} />
            <Route path="/:id" component={CvEditor} />
          </Switch>
        </DndProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
