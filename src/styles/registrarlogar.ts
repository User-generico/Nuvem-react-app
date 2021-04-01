import styled from "styled-components";

export const Meio = styled.div `
    form , .form{
    box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
    color: #071E41;

    section{
    width: 100%;
    text-align: center;
    justify-content: center;
    margin-top: 100px;
    display: flex;
    }

    section h1{
        color: black;

    }

    section div form label{
        color: black;
    }


    .col-3{
        border-radius: 10px;
        width: 90%;
        float: left;
        margin: 50px;
        flex-basis: 100px;
    }

    input[type=text], select {
        width: 50%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    
    input[type=submit] {
        width: 50%;
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    
    input[type=submit]:hover {
        background-color: #45a049;
    }
}
`