import styled from 'styled-components';
import { colorPalette } from '../../config/colors';

export const SingleBlogStyled = styled.div`
    width: 300px;
    max-height: 350px;
    background: ${colorPalette.darkGreen};
    text-align: center;
    overflow: hidden;
    border-radius: 10px;


    & img {
        object-fit: cover;
        width: 300px;
        height: 200px;

        &:hover {
            opacity: 0.7;
            cursor: pointer;
        }
    }

    & h1 {
        color : ${colorPalette.darkBlue};
    }

    .text-container {
        padding: 10px;

        & h1::selection , p::selection {
            background-color: ${colorPalette.green};
        }
    }
`;