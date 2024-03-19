import FooterButton from "../FooterButton/FooterButton.tsx";

const Footer = () => {
    return (
        <div className="flex justify-between items-center mt-6 w-full">
            <div className='footer-copyright text-white text-xs font-medium'>
                <span>АТ "УНІВЕРСАЛ БАНК" Ліцензія НБУ №92 від</span>
                <br/>
                <span>20.01.1994, у держреєстрі банків №226</span>
            </div>
            <div className="button-holder text-white flex gap-x-4">
                <FooterButton title={'Провести розіграш'} img={'cup.svg'}/>
                <FooterButton title={'Віджет для стрімів'} img={'gamepad.svg'}/>
            </div>
        </div>
    )
}

export default Footer;