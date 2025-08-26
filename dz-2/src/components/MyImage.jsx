function MyImage({ src, alt }) {
    return (
        <figure>
            <img src={src} alt={alt} />
        </figure>
    )
}

export default MyImage;