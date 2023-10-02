import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";
import { useState } from "react";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <AppWrapper>
            {user ? (
                <>
                    <Header />
                    <div className="app__body">
                        <Sidebar />
                        <Feed />
                        <Widget />
                    </div>
                </>
            ) : (
                <Login />
            )}
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
    background-color: #f1f2f5;
    .app__body {
        display: flex;
    }
`;

export default App;
