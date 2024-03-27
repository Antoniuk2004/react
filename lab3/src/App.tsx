import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Palette from "./pages/Palette/Palette.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import TransitionAnimation from "./common-components/Tansition/TransitionAnimation.tsx";
import {audioSignal} from "./audio-signal.ts";

function App() {
    return (
        <div className="font-['Barlow'] w-full min-h-screen bg-item">
            <TransitionAnimation/>
            <audio ref={(ref) => audioSignal.value = ref}
                   src={"/sounds/src_notify.mp3"}/>
            <Router>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/palette/*'} element={<Palette/>}/>
                    <Route path={'*'} element={<ErrorPage/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
