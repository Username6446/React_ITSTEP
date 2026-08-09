import { useState } from "react";
import "./Forms.css";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        nickname: "",
        email: "",
        gender: "",
        age: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Відправлені дані реєстрації:", formData);
        alert(`Вітаємо, ${formData.nickname}! Ви успішно зареєструвалися.`);
        
        setFormData({ nickname: "", email: "", gender: "", age: "" });
    }

    return (
        <div className="form-container">
            <h2>Реєстрація (Завдання 1)</h2>
            <form onSubmit={handleSubmit} className="custom-form">
                
                <label>Нікнейм:</label>
                <input 
                    type="text" 
                    name="nickname" 
                    value={formData.nickname} 
                    onChange={handleChange} 
                    required 
                />

                <label>Електронна адреса:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                />

                <label>Стать:</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="" disabled>Оберіть стать</option>
                    <option value="Чоловіча">Чоловіча</option>
                    <option value="Жіноча">Жіноча</option>
                    <option value="Інше">Інше</option>
                </select>

                <label>Вік:</label>
                <input 
                    type="number" 
                    name="age" 
                    value={formData.age} 
                    onChange={handleChange} 
                    min="1"
                    required 
                />

                <button type="submit" className="submit-btn">Зареєструватися</button>
            </form>
        </div>
    );
}

export default RegistrationForm;