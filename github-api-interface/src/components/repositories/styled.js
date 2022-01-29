import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
    font-size: 16px;
    width: 50%;
`;

export const WrapperTabList = styled(TabList)`
    display: flex;
    padding: 4px;
    margin: 0;
    list-style-type: none;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
    border-radius: 10px;
    border: 1px solid #cccccc;
    padding: 10px;
    margin: 8px;
    user-select: none;
    cursor: pointer;
    z-index: 99999;
    background-color: #ffffff;

    &:focus {
        outline: none;
    }

    &.is-selected {
        background: #fa8155;
        font-weight: bold;
        box-shadow: 0 0 5px #3f28eb;
     
    }

`;

//WrapperTabList.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;

    display: none;
    margin-top: -5px;
    
    &.is-selected {
        display: block;
        
    }
    
    `;


//WrapperTabList.tabsRole = "TabPanel";