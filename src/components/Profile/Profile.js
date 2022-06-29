import React from "react";
//import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Profile = () => {
  //const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src="https://camo.githubusercontent.com/b58e4aad30afc3014a6f54e73944e27cc799fc4ef9b17100722becf9623e44e7/68747470733a2f2f312e67726176617461722e636f6d2f6176617461722f65633432626133643632356534313238346132666533343364626564343265313f643d68747470732533412532462532466769746875622e6769746875626173736574732e636f6d253246696d6167657325324667726176617461727325324667726176617461722d757365722d3432302e706e6726723d6726733d313430" alt="Avatar of user" />
      <S.WrapperInfoUser>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span> Followers</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>Follwing</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> Gists</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span> Repos</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;