import AppLayout from "./components/AppLayout.tsx";
import TopText from "./components/TopText/TopText.tsx";
import UrlShorterSection from "./components/URLShorterSection/UrlShorterSection.tsx";
import CopyDialog from "./components/CopyDialog/CopyDialog.tsx";

const App = () => {
    return (
        <AppLayout>
            <CopyDialog/>
            <TopText/>
            <UrlShorterSection/>
        </AppLayout>
    );
}

export default App;
