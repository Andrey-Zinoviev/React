import { useState } from "react";
import PropTypes from "prop-types";

function RestaurantEditable({ name, address, rating, cuisine, image }) {
    const [restaurant, setRestaurant] = useState({ name, address, rating, cuisine, image });
    const [editing, setEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurant({ ...restaurant, [name]: value });
    };

    return (
        <section className="restaurant">
            {editing ? (
                <>
                    <input name="name" value={restaurant.name} onChange={handleChange} />
                    <input name="address" value={restaurant.address} onChange={handleChange} />
                    <input name="rating" type="number" step="0.1" value={restaurant.rating} onChange={handleChange} />
                    <input name="cuisine" value={restaurant.cuisine} onChange={handleChange} />
                    <input name="image" value={restaurant.image} onChange={handleChange} />
                    <button onClick={() => setEditing(false)}>Зберегти</button>
                </>
            ) : (
                <>
                    <h2>{restaurant.name}</h2>
                    <img src={restaurant.image} alt={restaurant.name} width="300" style={{ borderRadius: "12px" }} />
                    <p><strong>Адреса:</strong> {restaurant.address}</p>
                    <p><strong>Рейтинг:</strong> ⭐ {restaurant.rating}</p>
                    <p><strong>Тип кухні:</strong> {restaurant.cuisine}</p>
                    <button onClick={() => setEditing(true)}>Редагувати</button>
                </>
            )}
        </section>
    );
}

RestaurantEditable.propTypes = {
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    cuisine: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default RestaurantEditable;