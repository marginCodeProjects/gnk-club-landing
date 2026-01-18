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
    src: [
        {
            path: './fonts/ag-palatial/agpalatial_bolditalic.ttf',
            weight: '400',
            style: 'italic',
        },
    ],
    variable: '--font-ag-palatial',
    display: 'swap',
});