import { useState } from "react";
import "./ValidationForm.css";

function PhotoUploadForm() {
    const [formData, setFormData] = useState({
        nickname: "",
        password: "",
        email: "",
        photo: null,
        description: "",
        tags: ""
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: null }));
    }

    function handleFileChange(e) {
        const file = e.target.files[0];
        setFormData(prev => ({ ...prev, photo: file }));
        setErrors(prev => ({ ...prev, photo: null }));
    }

    function validateForm() {
        let newErrors = {};

        if (!formData.nickname) {
            newErrors.nickname = "Нікнейм є обов'язковим";
        } else if (formData.nickname.length < 5 || formData.nickname.length > 16) {
            newErrors.nickname = "Нікнейм повинен містити від 5 до 16 символів";
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,32}$/;
        if (!formData.password) {
            newErrors.password = "Пароль є обов'язковим";
        } else if (formData.password.length < 6 || formData.password.length > 32) {
            newErrors.password = "Пароль повинен містити від 6 до 32 символів";
        } else if (!passwordRegex.test(formData.password)) {
            newErrors.password = "Пароль повинен містити цифру, велику та малу літери";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email) {
            newErrors.email = "Електронна адреса є обов'язковою";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Невірний формат електронної пошти";
        }

        if (!formData.photo) {
            newErrors.photo = "Фотографія є обов'язковою";
        } else if (!formData.photo.type.startsWith("image/")) {
            newErrors.photo = "Файл повинен бути зображенням (image)";
        }

        if (formData.description.length > 200) {
            newErrors.description = "Опис не може перевищувати 200 символів";
        }

        if (!formData.tags.trim()) {
            newErrors.tags = "Потрібно додати хоча б один тег";
        } else {
            const tagsArray = formData.tags.trim().split(/\s+/);
            const isValidTags = tagsArray.every(tag => tag.startsWith("#"));
            if (!isValidTags) {
                newErrors.tags = "Кожен тег повинен починатися із символу #";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (validateForm()) {
            alert("Форма успішно пройшла валідацію та відправлена!");
            console.log("Дані форми:", formData);
        } else {
            console.log("Форма містить помилки");
        }
    }

    return (
        <form onSubmit={handleSubmit} className="minimal-form">
            <h2>Завантаження фото</h2>
            
            <label>Нікнейм</label>
            <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} />
            {errors.nickname && <span className="error">{errors.nickname}</span>}

            <label>Пароль</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            {errors.password && <span className="error">{errors.password}</span>}

            <label>Електронна адреса</label>
            <input type="text" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}

            <label>Фотографія (лише зображення)</label>
            <input type="file" name="photo" accept="image/*" onChange={handleFileChange} />
            {errors.photo && <span className="error">{errors.photo}</span>}

            <label>Опис фотографії (до 200 символів)</label>
            <textarea name="description" value={formData.description} onChange={handleChange} rows="3" />
            {errors.description && <span className="error">{errors.description}</span>}

            <label>Теги (через пробіл, наприклад: #природа #літо)</label>
            <input type="text" name="tags" value={formData.tags} onChange={handleChange} />
            {errors.tags && <span className="error">{errors.tags}</span>}

            <button type="submit">Завантажити</button>
        </form>
    );
}

export default PhotoUploadForm;