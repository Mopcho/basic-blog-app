import { SingleBlogStyled } from "../styles/SingleBlog.Styled"
import { SingleItemProps } from "./types"

export const SingleBlog = ({title, text, imageUrl}: SingleItemProps) => {
    return (
        <SingleBlogStyled>
            <img src={`${imageUrl}`} alt="blog" />
            <div className="text-container">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-pastelWhite">{text}</p>
            </div>
        </SingleBlogStyled>
    )
}