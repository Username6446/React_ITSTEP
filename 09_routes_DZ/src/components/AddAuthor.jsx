import { useState } from "react";
import { useNavigate } from "react-router";

function AddAuthor() {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        country: "",
        biography: "",
        birthDate: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        console.log("Дані автора:", formData);
        
        navigate("/authors"); 
    }

    return (
        <div className="container">
            <h2>Додати автора</h2>
            
            <form onSubmit={handleSubmit} className="simple-form">
                <label>Name (Ім'я)</label>
                <input type="text" name="name" onChange={handleChange} required />

                <label>Image (URL фотографії)</label>
                <input type="text" name="image" onChange={handleChange} required />

                <label>Country (Країна)</label>
                <input type="text" name="country" onChange={handleChange} required />

                <label>Biography (Біографія)</label>
                <textarea name="biography" onChange={handleChange} rows="4" required />

                <label>Birth Date (Дата народження)</label>
                <input type="date" name="birthDate" onChange={handleChange} required />

                <button type="submit" className="primary-btn">Submit</button>
            </form>
        </div>
    );
}

export default AddAuthor;