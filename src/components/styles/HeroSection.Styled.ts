import styled from 'styled-components';

export const HeroSectionStyled = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;

    & img {
        object-fit: contain;
        min-height: 200px;
        max-height: 300px;
    }
`;