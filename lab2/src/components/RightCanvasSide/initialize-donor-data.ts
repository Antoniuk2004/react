import {DonorDataType} from "../DataInput/DonorDataType.ts";

export const initializeDonorData = (): DonorDataType => {
    return {
        name: '',
        comment: '',
        cardNumber: '',
        month: '',
        year: '',
        cvc2: ''
    }
}