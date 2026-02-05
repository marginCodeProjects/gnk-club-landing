'use server'

import {CalculatorData, ContactData} from "@/types/application";

export async function sendApplication(data: { contact: ContactData, calculator?: CalculatorData }) {
    let text = `📩 <b>Новая заявка</b>\n\n`
    text += `👤 ${data.contact.name}\n`
    text += `📞 ${data.contact.phone}\n`

    if (data.calculator) {
        text += `\n🧮 <b>Конфигурация</b>\n`
        text += `• GPU: ${data.calculator.gpuCount} x H100\n`
        text += `• Срок: ${data.calculator.months} мес\n`
        text += `• Итого: ${data.calculator.totalSum} $\n`
    } else {
        text += `\nℹ️ Без расчёта`
    }

    console.log(process.env.TELEGRAM_BOT_TOKEN)
    console.log(process.env.TELEGRAM_CHAT_ID)

    const res = await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text,
            parse_mode: 'HTML',
        }),
    });

    if (!res.ok) {
        const error = await res.text()
        console.error('Telegram error:', error)
    }
}
