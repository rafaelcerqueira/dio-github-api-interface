import React from "react";
import * as S from "./styled";

function NoSearch() {
    return (
        <S.Wrapper>
            <span>Pesquise um nome de usuário do GitHub.</span>
            <h1>Nenhum usuário encontrado.</h1>
        </S.Wrapper>
    );
}

export default NoSearch;