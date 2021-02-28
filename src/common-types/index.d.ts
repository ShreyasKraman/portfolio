import React from 'react';

import {IconDefinition} from '@fortawesome/fontawesome-svg-core';

type INavigationItem = {
    icon?: IconDefinition,
    link?: string,
    active?: boolean,
    close?: () => void,
    switch?: () => void,
    children?: React.ReactNode    
}

type ToolbarType = {
    open: () => void,
    switch: () => void,
}

type BackdropType = {
    clicked: () => void,
    show: boolean
}

type SidedrawerType = {
    open: boolean,
    close: () => void
}