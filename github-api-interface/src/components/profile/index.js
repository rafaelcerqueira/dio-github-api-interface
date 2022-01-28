import React from "react";
import * as S from "./styled";

function Profile() {
    return (
        <S.Wrapper>
            <S.WrapperImage 
                src="https://avatars.githubusercontent.com/u/53058401?v=4" 
                alt="Avatar do usuário" 
            />
            <S.WrapperInfoUser>
                <div>
                    <h1>Rafael Freitas</h1>
                    <S.WrapperUsername>
                        <h3>Username:</h3>

                        <a href="https://github.com/rafaelcerqueira" target="_blank" rel="noopener noreferrer">rafaelcerqueira</a>

                    </S.WrapperUsername>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h3>Followers</h3>
                        <span>44</span>
                    </div>
                    <div>
                        <h3>Starred</h3>
                        <span>44</span>
                    </div>
                    <div>
                        <h3>Following</h3>
                        <span>44</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>

        </S.Wrapper>
    );
}

export default Profile;