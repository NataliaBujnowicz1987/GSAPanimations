import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import WeatherApp from '../pages/WeatherApp';
import RecipeApp from '../pages/RecipeApp';
import Admin from '../pages/Admin';

const Main = () => {
    return (
        <>
            <Switch>
                <Route path="/GSAPanimations" exact component={HomePage} />
                <Route path="/weatherapp" exact component={WeatherApp} />
                <Route path="/recipeapp" exact component={RecipeApp} />
                <Route path="/admin" exact component={Admin} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    )
}

export default Main;