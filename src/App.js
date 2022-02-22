import React from "react";
import "./App.css";
import Main from "Components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "Redux/Store";
function App() {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
