import { useState } from "react";
import PropTypes from "prop-types";

function LoginForm({ onSubmit }) {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ login, password });
    };

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h2>Вхід</h2>
            <div>
                <label>Логін: </label>
                <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
            </div>
            <div>
                <label>Пароль: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Увійти</button>
            <p><strong>Введено:</strong> {login ? `Логін: ${login}, Пароль: ${password}` : "нічого"}</p>
        </form>
    );
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;