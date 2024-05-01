import UrlShorterSectionLayout from "./UrlShorterSectionLayout";
import SectionTitle from "../SectionTitle/SectionTitle.tsx";
import InputForm from "../InputForm/InputForm.tsx";
import UrlInput from "../URLInput/UrlInput.tsx";
import SubmitButton from "../SubmitButton/SubmitButton.tsx";
import Description from "../Description/Description.tsx";

const UrlShorterSection = () => {
    return (
        <UrlShorterSectionLayout>
            <SectionTitle/>
            <InputForm>
                <UrlInput/>
                <SubmitButton/>
            </InputForm>
            <Description/>
        </UrlShorterSectionLayout>
    )
}

export default UrlShorterSection;