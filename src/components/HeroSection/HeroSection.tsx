import HEROIMAGE from '../../assets/images/heroImage.png';
import { HeroSectionStyled } from '../styles/HeroSection.Styled';

export const HeroSection = () => {

    return (
        <HeroSectionStyled className='container'>
            <h1 className='text-5xl text-pastelWhite font-bold my-6 select-none'>The blog for all your blog posts!</h1>
            <h3 className='text-xl text-pastelWhite spac tracking-[0.9rem] select-none'>Like it aint obvious</h3>
            <img src={HEROIMAGE} alt="Hero" />
        </HeroSectionStyled>
    )
}