import React from 'react';
import styles from './Hero.module.css'

const GonkaAndBitcoin = () => {
    return (
        <div className="bg-white rounded-3xl px-3 py-10 md:px-15 md:py-20 box-border mt-20">
            <div className="grid px-3 md:grid-cols-2 gap-20">
                <div className="text-4xl md:text-5xl text-[#344499]">GONKA — не классический майнинг</div>
                <div className="text-base md:text-xl text-left text-[#01040B]">
                    GONKA — децентрализованная сеть GPU-вычислений
                    для задач искусственного интеллекта. Мощности используются для реальных AI-нагрузок,
                    вознаграждение начисляется в токенах GNK.
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.wrapper}>
                    <div className={styles.circle}>
                        <div className="text-center xl:text-left text-xl xl:text-2xl"><b><i>10,000+ NVIDIA H100 в сети</i></b></div>
                        <div className="text-center xl:text-left text-base xl:text-xl">
                            Единый распределённый пул GPU для реальных AI-нагрузок
                            с автоматическим масштабированием.
                        </div>
                    </div>

                    <div className={styles.circle}>
                        <div className="text-center xl:text-left text-xl xl:text-2xl"><b><i>AWS/Azure — альтернатива монополии</i></b></div>
                        <div className="text-center xl:text-left text-base xl:text-xl">
                            Прямой доступ к вычислениям без вендор-локина,
                            закрытых тарифов и централизованного контроля.
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
                    <b><i className="text-center md:text-left text-xl md:text-2xl">Миссия:</i></b> Не допустить монополизации
                    AI-инфраструктуры несколькими крупными корпорациями,
                    как это произошло с классическими вычислениями (Amazon, Microsoft, Google).
                </div>
                <div>
                    <b><i className="text-center md:text-left text-xl md:text-2xl">Вдохновение Bitcoin:</i></b> GONKA следует модели Bitcoin
                    и инфраструктуре, созданной майнерами. Децентрализованная сеть майнеров Bitcoin
                    в разы превосходит вычислительную мощность традиционных облачных компаний
                    — именно такую модель мы строим для AI-вычислений.
                </div>
            </div>
        </div>
    );
};

export default GonkaAndBitcoin;