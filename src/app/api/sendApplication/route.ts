import { NextRequest, NextResponse } from "next/server";
import { CalculatorData, ContactData } from "@/types/application";

export async function POST(req: NextRequest) {
    try {
        const data: { contact: ContactData; calculator?: CalculatorData } = await req.json();

        let text = `📩 <b>Новая заявка</b>\n\n`;
        text += `👤 ${data.contact.name}\n`;
        text += `📞 ${data.contact.phone}\n`;

        if (data.calculator) {
            text += `\n🧮 <b>Конфигурация</b>\n`;
            text += `• GPU: ${data.calculator.gpuCount} x H100\n`;
            text += `• Срок: ${data.calculator.months} мес\n`;
            text += `• Итого: ${data.calculator.totalSum} $\n`;
        } else {
            text += `\nℹ️ Без расчёта`;
        }

        // Логи токенов для проверки (в продакшене можешь убрать)
        console.log("TELEGRAM_BOT_TOKEN =", process.env.TELEGRAM_BOT_TOKEN);
        console.log("TELEGRAM_CHAT_ID =", process.env.TELEGRAM_CHAT_ID);

        const res = await fetch(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: process.env.TELEGRAM_CHAT_ID,
                    text,
                    parse_mode: "HTML",
                }),
            }
        );

        if (!res.ok) {
            const error = await res.text();
            console.error("Telegram error:", error);
            return NextResponse.json({ ok: false, error }, { status: 500 });
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("SendApplication error:", err);
        return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
    }
}
