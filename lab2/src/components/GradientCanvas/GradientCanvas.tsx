import MoneyInput from "../MoneyInput/MoneyInput.tsx";
import AddMoneyButton from "../AddMoneyButton/AddMoneyButton.tsx";
import {MutableRefObject} from "react";

const GradientCanvas = (props: { moneyInputRef: MutableRefObject<HTMLDivElement | null> }) => {
    return (
        <div
            className="w-gradient-canvas p-0.75 overflow-hidden mt-11 mb-8 rounded-3xl flex items-center justify-center bg-gradient-to-br from-gradient-blue to-gradient-pink">
            <div className="w-full py-6 rounded-gradient-canvas bg-white font-semibold">
                <div className="title flex items-center gap-x-2 w-full justify-center">
                    <span className="text-sm">Сума поповнення</span>
                    <img src="/images/money.png" alt=""/>
                </div>
                <MoneyInput moneyInputRef={props.moneyInputRef}/>
                <div className="buttons flex justify-center gap-x-4 px-7">
                    <AddMoneyButton amount={100} moneyInputRef={props.moneyInputRef}/>
                    <AddMoneyButton amount={500} moneyInputRef={props.moneyInputRef}/>
                    <AddMoneyButton amount={1000} moneyInputRef={props.moneyInputRef}/>
                </div>
            </div>
        </div>
    )
}

export default GradientCanvas;