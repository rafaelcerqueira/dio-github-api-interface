import React, { useEffect, useState } from "react";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
import * as S from "./styled";

function Repositories() {
    const { githubState, getUserRepos } = useGithub();
    const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false);

    useEffect(() => {
        if (!!githubState.user.login) {
            getUserRepos();
        }
        sethasUserForSearchRepos(!!githubState.repositories);
    }, [githubState.user]);

    return (
        <>
            {hasUserForSearchRepos ? (
                 <S.WrapperTabs 
                 selectedTabClassName="is-selected"
                 selectedTabPanelClassName="is-selected"
                 >
                    <S.WrapperTabList>
                         <S.WrapperTab>Repositories</S.WrapperTab>
                        <S.WrapperTab>Starred</S.WrapperTab>
                    </S.WrapperTabList>

                    <S.WrapperTabPanel>
                        {githubState.repositories.map((item) =>
                            <RepositoryItem
                            key={item.id} 
                            name={item.name} 
                            linkToRepo={item.repos_url}
                            fullName={item.full_name} 
                            />
                            
                        )}
                    </S.WrapperTabPanel>
                    <S.WrapperTabPanel>
                        {githubState.starred.map((item) =>
                            <RepositoryItem
                            key={item.id} 
                            name={item.name} 
                            linkToRepo={item.repos_url}
                            fullName={item.full_name}  
                            />
                            
                        )}
                    </S.WrapperTabPanel>

                </S.WrapperTabs>
                ) : (
                    <></>
                    )
            }
        </>
    );
}

export default Repositories;