import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
    :root {
        --just-white: #fff;
        --just-blue: #4664F4;
        --just-red: #DB2E4D;
        --just-yellow: #EB9F0E;
        --just-cyan: hsl(189, 59%, 53%);
        --just-purple:  hsl(261, 73%, 60%);
        --text-color:       #3B4262;
        --baseFont: 'Barlow Semi Condensed', sans-serif;;
        --mobileSmallBold: bold .9375rem / 2rem var(--baseFont);
        --mobileThirdHeadlineBold: bold 3.5rem / 4.1875rem var(--baseFont);
    }
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: var(--baseFont);
        min-block-size: 100vh;
        color: var(--just-white);
        background: radial-gradient(134.34% 134.34% at 50% 0%, #1F3757 0%, #131537 100%);
    }
    p,h1 {
        margin: 0
    }
    .wrapper {
        max-inline-size: 900px;
        margin: auto;
    }
    .game-content {
        display:flex;
        flex-direction: column;
        justify-content: space-between;
        padding-inline: 2rem;
        min-block-size: 100vh;
        padding-block-start: 2rem;
        padding-block-end: 3.5rem;
    }
    .btn {
        /* inline-size: 8rem; */
        padding-block: .625rem;
        padding-inline: 2.25rem;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight:bold;
        font-size: 1rem;
        line-height: 1.25rem;
        border: 1px solid var(--just-white);
        border-radius: .5rem;
        color: var(--just-white);
        background-color: unset;
        cursor: pointer;
        transition: all .3s ease-in-out;
    }
    .is-white {
        background-color: var(--just-white);
        color: #3B4262;
    }
    .btn:hover {
        background-color: var(--just-white);
        color: #3B4262;
    }
    .btn:active {
        transform: scale(.98);
    }
    .button {
        text-align: center;
    }
    @media screen and (min-width: 768px) {
      
        .is-btn-home {
            
            position: absolute;
            inset-inline-end: 2rem;
            inset-block-end: 2rem;
        }
    }
`;

export default GlobalStyled;
