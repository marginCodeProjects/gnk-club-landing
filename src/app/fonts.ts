import localFont from 'next/font/local';

export const ltSuperior = localFont({
    src: [
        {
            path: './fonts/lt-superior/LTSuperior-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/lt-superior/LTSuperior-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/lt-superior/LTSuperior-Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-lt-superior',
    display: 'swap',
});

export const agPalatial = localFont({
    src: './fonts/ag-palatial/agpali.woff2', // Убедитесь, что путь верный
    variable: '--font-ag-palatial',
    weight: '400', // Попробуйте указать точный вес, даже если это курсив
    style: 'normal', // Если шрифт сам по себе наклонный
    display: 'block', // Попробуйте 'block' вместо 'swap', чтобы заставить браузер ждать шрифт
});
