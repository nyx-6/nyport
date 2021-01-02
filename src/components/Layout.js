import { React } from "react";
import { Switch, Route } from 'react-router-dom';
import Index from './pages/Inde';

function Layout() {
    return (
        <Switch>
            <Route path="/" component={Index} />
        </Switch>
    );
}

export default Layout;

