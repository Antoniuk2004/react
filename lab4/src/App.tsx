import './styles/App.css'
import './styles/date-picker.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import {signal} from "@preact/signals-react";
import {AppData} from "./types/AppData.ts";
import RegistrationFirstStage from "./pages/Registration/FirstStage/RegistrationFirstStage.tsx";
import RegistrationSecondStage from "./pages/Registration/SecondStage/RegistrationSecondStage.tsx";
import RegistrationThirdStage from "./pages/Registration/ThirdStage/RegistrationThirdStage.tsx";
import ProfileInfoFirstStage from "./pages/ProfileInfo/FirstStage/ProfileInfoFirstStage.tsx";
import ProfileInfoSecondStage from "./pages/ProfileInfo/SecondStage/ProfileInfoSecondStage.tsx";
import ProfileInfoThirdStage from "./pages/ProfileInfo/ThirdStage/ProfileInfoThirdStage.tsx";
import Home from "./pages/Home/Home.tsx";
import {initialAppValues} from "./utils/initial-app-values.ts";
import RegistrationModal
    from "./common-components/RegistrationModal/RegistrationModal.tsx";

export const appDataSignal = signal<AppData>(initialAppValues);

function App() {
    return (
        <div className="w-full min-h-screen bg-item select-none">
            <RegistrationModal/>
            <Router>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/registration/1'} element={<RegistrationFirstStage/>}/>
                    <Route path={'/registration/2'} element={<RegistrationSecondStage/>}/>
                    <Route path={'/registration/3'} element={<RegistrationThirdStage/>}/>
                    <Route path={'/profile-info/1'} element={<ProfileInfoFirstStage/>}/>
                    <Route path={'/profile-info/2'} element={<ProfileInfoSecondStage/>}/>
                    <Route path={'/profile-info/3'} element={<ProfileInfoThirdStage/>}/>
                    <Route path={'*'} element={<ErrorPage/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
