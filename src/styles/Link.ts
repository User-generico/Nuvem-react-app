import styled, {css} from "styled-components";
import {LinkProps} from "./Interfaces/Link.interface"

const sizeVariations = {
    default: css`
        height: 35px;
        width: 150px;
        font-size: 16px;
    `
}

const colorVariaations = {
    default: css`
        background: var(--main-background);
        color: var(--main);
        &-hover{
            background: var(--main-hover);
        }

    `
}

const Link = styled.a<LinkProps>`
    transition: background-color 0.10 ease;
    transition: color 0.10 ease-in-out, background-color 0.10 ease-in-out;
    border-color: color 0.10 ease-in-out, box-shadow 0.10 ease-in-out;
    
    padding: 5px;
    font-weight: 700;

    display: flex;
    align-items: center;
    color: var(--main-hover);

    cursor: pointer;

    ${(props) => sizeVariations[props.size || "default"]}
    ${(props) => sizeVariations[props.bgColor || "default"]}

    &:focus{
        outline: none;
    }
`

export default Link;
