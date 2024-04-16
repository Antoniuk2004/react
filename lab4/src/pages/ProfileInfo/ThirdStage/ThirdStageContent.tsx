import Title from "../../../common-components/Title/Title.tsx";
import BodyText, {BodyTextType} from "../../../common-components/BodyText/BodyText.tsx";
import TopLine from "../../../common-components/TopLine.tsx";
import PageContentLayout from "../../../common-components/PageContentLayout.tsx";
import Separator from "../../../common-components/Separator/Separator.tsx";
import ThirdProfileInfoForm from "./ThirdProfileInfoForm.tsx";
import Block from "../../../common-components/Block.tsx";
import BlockContainer from "../../../common-components/BlockContainer.tsx";
import SubHead from "../../../common-components/SubHead/SubHead.tsx";
import Button from "../../../common-components/Button.tsx";
import {IoMdCheckmark} from "react-icons/io";
import AddressInput from "./components/AddressInput.tsx";
import CountryInput from "../FirstStage/components/CountryInput/CountryInput.tsx";
import InputsSeparator from "../../../common-components/InputsSeparator.tsx";
import ZipCodeInput from "./components/ZipCodeInput.tsx";
import OptionalInput from "./components/OptionalInput.tsx";
import InvalidInput from "../../../common-components/InvalidInput.tsx";
import {getErrorMessages} from "./helpers.ts";
import CityInput from "../FirstStage/components/CityInput/CityInput.tsx";
import {appDataSignal} from "../../../App.tsx";

const ThirdStageContent = () => {
    return (
        <PageContentLayout>
            <TopLine>
                <Title text={'Profile info'}/>
                <BodyText type={BodyTextType.PROFILE_INFO}/>
            </TopLine>
            <Separator/>
            <ThirdProfileInfoForm>
                <Block>
                    <InvalidInput getMessagesFunc={getErrorMessages}/>
                    <BlockContainer isMarginBottom={false}>
                        <SubHead
                            topLineText={'Delivery address'}
                            bottomLineText={'Used for shipping orders'}
                        />
                        <AddressInput/>
                        <CityInput
                            initialValue={appDataSignal.value.city}
                        />
                        <InputsSeparator>
                            <CountryInput
                                initialValue={appDataSignal.value.country}
                            />
                            <ZipCodeInput/>
                        </InputsSeparator>
                        <OptionalInput/>
                    </BlockContainer>
                </Block>
                <Button primary={true}>
                    <IoMdCheckmark/>
                    <span>Save</span>
                </Button>
            </ThirdProfileInfoForm>
        </PageContentLayout>
    )
}

export default ThirdStageContent;