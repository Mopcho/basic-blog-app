import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colorPalette } from '../../config/colors';

export const ManuItemStyled = styled(NavLink)`
    color: ${colorPalette.darkBlue};
    
    &:hover {
        color: ${colorPalette.pastelWhite};
        border-bottom: 2px solid ${colorPalette.pastelWhite}
    };

    @media (max-width: 640px) {
        display: none;
    }
`;