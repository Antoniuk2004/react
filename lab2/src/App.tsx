import './App.css'
import Canvas from "./components/Canvas/Canvas.tsx"
import Footer from "./components/Footer/Footer.tsx";

function App() {
    return (
        <div
            className="h-screen font-['Inter'] flex flex-col items-center justify-center bg-gradient-to-br from-purple to-pink">
            <div className='wrapper w-[990px]'>
                <Canvas/>
                <Footer/>
            </div>
        </div>
    )
}

export default App
