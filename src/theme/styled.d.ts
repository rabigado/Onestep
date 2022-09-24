import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primaryBackground: string;
            primaryText: string;
            error:string;
        },
        fontSizes:{
            smallText: number;
            textSmaller: number;
            text: number;
            subTitle: number;
            tab: number;
            textLarge: number;
            modalTitle: number;
            title: number;
            titleLarge: number;
            huge: number;
        },
        fontFamilies:{
            regular: string;
            medium: string;
            light: string;
        }
    }
}
