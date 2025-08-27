import PropTypes from "prop-types";

function Restaurant({ name, address, rating, cuisine, image }) {
    return (
        <section className="restaurant">
            <h2>{name}</h2>
            <img src={image} alt={name} width="300" style={{ borderRadius: "12px" }} />
            <p><strong>Адреса:</strong> {address}</p>
            <p><strong>Рейтинг:</strong> ⭐ {rating}</p>
            <p><strong>Тип кухні:</strong> {cuisine}</p>
        </section>
    );
}

Restaurant.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    cuisine: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Restaurant;