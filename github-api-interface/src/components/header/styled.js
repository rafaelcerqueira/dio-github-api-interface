import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 4px;
    justify-content: space-between;


    input {
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        height: 35px;
        padding: 8px;

    }

    button {
        background: #ccc;
        padding: 8px 16px;
        margin: 0 16px;
        border-radius: 4px;

        &:hover {
            background: #fa8155;
            box-shadow: 0 0 5px #3f28eb;
            
            span {
                color: #fff;
            }
        }

        span {
            font-weight: bold;
    
        }

    }

`;