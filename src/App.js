import './App.scss';
import Header from "./components/Header/Header";
import { useOutlet } from "react-router-dom";
import Main from "./components/Main/Main";

function App() {
    const outlet = useOutlet();

    return (
        <>
            <Header />
            {outlet ? outlet : <Main />}
        </>
    );
}

export default App;
