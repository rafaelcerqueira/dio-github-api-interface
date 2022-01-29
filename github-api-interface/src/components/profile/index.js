import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

function Profile() {
    const { githubState } = useGithub();

    return (
        <S.Wrapper>
            <S.WrapperImage 
                src={githubState.user.avatar} 
                alt="Avatar do usuário" 
            />
            <S.WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <S.WrapperUserGeneric>
                        <h3>Username:</h3>

                        <a href={githubState.user.html_url} target="_blank" rel="noopener noreferrer">{githubState.user.login}</a>

                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Company:</h3>
                        <span>{githubState.user.company}</span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Location</h3>
                        <span>{githubState.user.location}</span>
                    </S.WrapperUserGeneric>
                    <S.WrapperUserGeneric>
                        <h3>Blog:</h3>
                        <a href={githubState.user.blog} target="_blank" rel="noopener noreferrer">
                            {githubState.user.blog}
                        </a>
                    </S.WrapperUserGeneric>


                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h3>Followers</h3>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h3>Following</h3>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h3>Gists</h3>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h3>Repos</h3>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUser>

        </S.Wrapper>
    );
}

export default Profile;