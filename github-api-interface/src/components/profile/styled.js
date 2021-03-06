import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;

    h3 {
        margin-right: 8px;
        
    }

    a {
        font-size: 16px;
        color: #f52f11;
    }

`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 200px;
    margin-left: 10px;

    h1{
        font-size: 26px;
        font-weight: bold;
    }

    h3{
        font-size: 16px;
        font-weight: bold;
    }
    
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    
    div {
        margin: 8px;
        text-align: center;
    }
    
`;


export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 190px;
    margin: 10px;

`;
