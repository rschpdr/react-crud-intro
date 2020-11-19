import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import CharacterForm from "./CharacterForm";
import CharacterEdit from "./CharacterEdit";
import CharacterDelete from "./CharacterDelete";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Switch>
          <Route exact path="/" component={CharacterList} />
          <Route exact path="/character/new" component={CharacterForm} />

          <Route exact path="/character/edit/:id" component={CharacterEdit} />
          <Route
            exact
            path="/character/delete/:id"
            component={CharacterDelete}
          />
          <Route path="/character/:id" component={CharacterDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
