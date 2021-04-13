import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const globalStyle = createGlobalStyle`
    ${reset};
    a{
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
        color : #e0e0df;
    }
    body{
        font-size:14px;
        background-color: rgba(20 , 20 ,20 ,1);
        padding-top : 50px;
    }
`;

export default globalStyle;