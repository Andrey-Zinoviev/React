import LoginForm from "./components/MyLoginForm.jsx";

function App() {
    const handleLogin = ({ login, password }) => {
        console.log("Користувач:", login, "Пароль:", password);
    };

    return (
        <div className="container">
            <LoginForm onSubmit={handleLogin} />
        </div>
    );
}

export default App;