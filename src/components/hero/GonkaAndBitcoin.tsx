import React from 'react';
import styles from './Hero.module.css'

const GonkaAndBitcoin = () => {
    return (
        <div className="bg-white rounded-3xl px-3 py-10 md:px-15 md:py-20 box-border mt-20">
            <div className="grid px-3 md:grid-cols-2 gap-20">
                <div className="text-4xl md:text-5xl text-[#344499]">GONKA — не классический майнинг</div>
                <div className="text-base md:text-xl text-left text-[#01040B]">
                    GONKA — распределенная сеть gpu для задач задач искусственного интеллекта.
                    Мощности используются для реальных AI-нагрузок, вознаграждение начисляется в токенах GNK.
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.wrapper}>
                    <div className={styles.circle}>
                        <div className="text-center xl:text-left text-xl xl:text-2xl"><b><i>10,000+ NVIDIA H100 в сети</i></b></div>
                        <div className="text-center xl:text-left text-base xl:text-xl">
                            За 5 месяцев с момента запуска к gonka подключили более 10000 gpu nvidia h100
                        </div>
                    </div>

                    <div className={styles.circle}>
                        <div className="text-center xl:text-left text-xl xl:text-2xl"><b><i>GONKA — альтернатива монополии</i></b></div>
                        <div className="text-center xl:text-left text-base xl:text-xl">
                            Распределённая сеть с тысячами видеокарт станет конкурировать с монополистами AWS|AZURE|GOOGLE
                        </div>
                    </div>

                    <div className={`${styles.circle} ${styles.active}`}>
                        <div className="text-center xl:text-left text-xl xl:text-2xl"><b><i>Bitcoin — философия децентрализации</i></b></div>
                        <div className="text-center xl:text-left text-base xl:text-xl">
                            Распределённая модель с независимыми участниками
                            и прозрачными экономическими стимулами.
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 grid md:grid-cols-2 text-base md:text-xl gap-10">
                <div>
                    <b><i className="text-center md:text-left text-xl md:text-2xl">Миссия: </i></b>
                    Не допустить монополизации AI-инфраструктуры несколькими крупными корпорациями,
                    как это произошло с классическими облачными вычислениями.
                </div>
                <div>
                    <b><i className="text-center md:text-left text-xl md:text-2xl">Bitcoin показал, что спрос майнеров может увеличить </i></b>
                    эффективность оборудования в сотни тысяч раз. Мы верим, что то же самое произойдёт с AI‑вычислениями.
                </div>
            </div>
        </div>
    );
};

export default GonkaAndBitcoin;