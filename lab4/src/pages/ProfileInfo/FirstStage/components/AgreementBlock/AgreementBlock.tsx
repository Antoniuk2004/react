import AgreementBlockLayout from "./AgreementBlockLayout.tsx";
import AgreementCheckbox from "./components/AgreementCheckbox.tsx";
import AgreementTextLayout from "./components/AgreementTextLayout.tsx";
import {handleTermsClick} from "../../handlers.tsx";

const AgreementBlock = () => {
    return (
        <AgreementBlockLayout>
            <AgreementCheckbox/>
            <AgreementTextLayout>
                <span>I agree with</span>
            </AgreementTextLayout>
            <AgreementTextLayout
                handleClick={handleTermsClick}
                cursor={'cursor-pointer'}
                color={'text-primary'}
                weight={'font-medium'}>
                <a>Terms of use</a>
            </AgreementTextLayout>
        </AgreementBlockLayout>
    )
}

export default AgreementBlock;