import RestaurantEditable from "./components/MyRestaurantEditable.jsx";

function App() {
    return (
        <div className="container">
            <RestaurantEditable
                name="La Piazza"
                address="Київ, вул. Хрещатик, 15"
                rating={4.7}
                cuisine="Італійська"
                image="https://cdn.pixabay.com/photo/2017/04/04/17/56/restaurant-2209813_960_720.jpg"
            />
        </div>
    );
}

export default App;