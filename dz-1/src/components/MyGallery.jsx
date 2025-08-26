function MyGallery() {
    return (
        <>
            <section className="gallery">
                <h2>Визначні місця:</h2>
                <div className="images">
                    <figure>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/uk/thumb/a/a8/Kiev_Independence_Square_cropped.jpg/1200px-Kiev_Independence_Square_cropped.jpg"
                            alt="Майдан Незалежності"/>
                        <figcaption>Майдан Незалежності</figcaption>
                    </figure>
                    <figure>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/%D0%9B%D0%B0%D0%B2%D1%80%D0%B0.jpg/1200px-%D0%9B%D0%B0%D0%B2%D1%80%D0%B0.jpg"
                            alt="Києво-Печерська лавра"/>
                        <figcaption>Києво-Печерська лавра</figcaption>
                    </figure>
                    <figure>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRiYilvBoa7O0BwZ4AGtspW4IQEDx9G5SIQ&s"
                            alt="Батьківщина-Мати"/>
                        <figcaption>Батьківщина-Мати</figcaption>
                    </figure>
                </div>
            </section>
        </>
    )
}

export default MyGallery;