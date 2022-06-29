import  React from "react";
import * as S from "./styled";

const Repositories = () => {
    return
    <S.WrapperTabs>
        selectTabClassName="is-selected"
        selectTabPanelClassName="is-selected"
        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Stared</S.WrapperTab>
        </S.WrapperTabList>
    </S.WrapperTabs>
};

export default Repositories;