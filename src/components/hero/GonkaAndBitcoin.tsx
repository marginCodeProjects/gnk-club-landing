import React from 'react';
import styles from './Hero.module.css'

const GonkaAndBitcoin = () => {
    return (
        <div className="bg-white rounded-3xl px-15 py-20 box-border mt-20">
            <div className="grid grid-cols-2 gap-20">
                <div className="text-5xl text-[#344499]">GONKA — не классический майнинг</div>
                <div className="text-xl text-left text-[#01040B]">
                    GONKA — децентрализованная сеть GPU-вычислений
                    для задач искусственного интеллекта. Мощности используются для реальных AI-нагрузок,
                    вознаграждение начисляется в токенах GNK.
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.wrapper}>
                    <div className={styles.circle}>
                        <h3>10,000+ NVIDIA<br />H100 в сети</h3>
                        <p>
                            Единый распределённый пул GPU для реальных AI-нагрузок
                            с автоматическим масштабированием.
                        </p>
                    </div>

                    <div className={styles.circle}>
                        <h3>AWS/Azure —<br />альтернатива монополии</h3>
                        <p>
                            Прямой доступ к вычислениям без вендор-локина,
                            закрытых тарифов и централизованного контроля.
                        </p>
                    </div>

                    <div className={`${styles.circle} ${styles.active}`}>
                        <h3>Bitcoin — философия<br />децентрализации</h3>
                        <p>
                            Распределённая модель с независимыми участниками
                            и прозрачными экономическими стимулами.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-10 grid grid-cols-2 text-xl gap-10">
                <div>
                    <i className={styles.boldItalic}>Миссия:</i> Не допустить монополизации
                    AI-инфраструктуры несколькими крупными корпорациями,
                    как это произошло с классическими вычислениями (Amazon, Microsoft, Google).
                </div>
                <div>
                    <i className={styles.boldItalic}>Вдохновение Bitcoin:</i> GONKA следует модели Bitcoin
                    и инфраструктуре, созданной майнерами. Децентрализованная сеть майнеров Bitcoin
                    в разы превосходит вычислительную мощность традиционных облачных компаний
                    — именно такую модель мы строим для AI-вычислений.
                </div>
            </div>
        </div>
    );
};

export default GonkaAndBitcoin;