import HomeLayout from "./HomeLayout.tsx";
import HomeTitle from "./components/HomeTitile/HomeTitle.tsx";
import Button from "../../common-components/Button.tsx";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <HomeLayout>
            <HomeTitle/>
            <Button
                px={'px-8'}
                py={'py-8'}
                fontSize={'text-3xl'}
                action={() => navigate('/registration/1') }
                primary={true}>
                <span>Registration</span>
            </Button>
        </HomeLayout>
    )
}

export default Home;