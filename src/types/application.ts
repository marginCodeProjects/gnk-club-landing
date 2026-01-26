export interface ApplicationData {
    calculator?: CalculatorData;
    contact: ContactData;
}

export type CalculatorData = {
    gpuCount: number
    months: number
    totalSum: number
}

export type ContactData = {
    name: string
    phone: string
}