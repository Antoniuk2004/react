import Title from "../../../common-components/Title/Title.tsx";
import BodyText, {BodyTextType} from "../../../common-components/BodyText/BodyText.tsx";
import TopLine from "../../../common-components/TopLine.tsx";
import PageContentLayout from "../../../common-components/PageContentLayout.tsx";
import AgreementBlock from "./components/AgreementBlock/AgreementBlock.tsx";
import BlockContainer from "../../../common-components/BlockContainer.tsx";
import FirstNameInput from "./components/FirstNameInput.tsx";
import FirstProfileInfoForm from "./components/FirstProfileInfoForm.tsx";
import Button from "../../../common-components/Button.tsx";
import {MdArrowRightAlt} from "react-icons/md";
import SecondNameInput from "./components/SecondNameInput.tsx";
import SubHead from "../../../common-components/SubHead/SubHead.tsx";
import DataOfBirthInput from "./components/DataOfBirthInput/DataOfBirthInput.tsx";
import CountryInput from "./components/CountryInput/CountryInput.tsx";
import InputsSeparator from "../../../common-components/InputsSeparator.tsx";
import CityInput from "./components/CityInput/CityInput.tsx";
import ItinBlock from "./components/ItinBlock/ItinBlock.tsx";
import Block from "../../../common-components/Block.tsx";
import InvalidInput from "../../../common-components/InvalidInput.tsx";
import Separator from "../../../common-components/Separator/Separator.tsx";
import {getErrorMessages} from "./helpers.ts";

const FirstStageContent = () => {
    return (
        <PageContentLayout>
            <TopLine>
                <Title text={'Profile info'}/>
                <BodyText type={BodyTextType.PROFILE_INFO}/>
            </TopLine>
            <FirstProfileInfoForm>
                <AgreementBlock/>
                <Separator/>
                <Block>
                    <InvalidInput getMessagesFunc={getErrorMessages}/>
                    <BlockContainer isMarginBottom={false}>
                        <SubHead
                            topLineText={'Personal data'}
                            bottomLineText={'Specify exactly as in your passport'}
                        />
                        <FirstNameInput/>
                        <SecondNameInput/>
                        <DataOfBirthInput/>
                        <InputsSeparator>
                            <CountryInput/>
                            <CityInput/>
                        </InputsSeparator>
                    </BlockContainer>
                </Block>
                <ItinBlock/>
                <Button>
                    <span>Go Next</span>
                    <MdArrowRightAlt className="text-2xl"/>
                </Button>
            </FirstProfileInfoForm>
        </PageContentLayout>
    )
}

export default FirstStageContent;