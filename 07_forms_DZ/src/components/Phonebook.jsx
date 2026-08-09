import { useState } from "react";
import "./Forms.css";

function Phonebook() {
    const [contacts, setContacts] = useState([]);
    
    const [newContact, setNewContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNewContact((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function handleAddContact(event) {
        event.preventDefault();
        
        setContacts((prevContacts) => [...prevContacts, newContact]);
        
        setNewContact({ firstName: "", lastName: "", email: "", phone: "" });
    }

    return (
        <div className="form-container" style={{ maxWidth: "600px" }}>
            <h2>Телефонна книга (Завдання 2)</h2>
            
            <form onSubmit={handleAddContact} className="custom-form">
                <input 
                    type="text" name="firstName" placeholder="Ім'я" 
                    value={newContact.firstName} onChange={handleChange} required 
                />
                <input 
                    type="text" name="lastName" placeholder="Прізвище" 
                    value={newContact.lastName} onChange={handleChange} required 
                />
                <input 
                    type="email" name="email" placeholder="Електронна адреса" 
                    value={newContact.email} onChange={handleChange} required 
                />
                <input 
                    type="tel" name="phone" placeholder="Телефон" 
                    value={newContact.phone} onChange={handleChange} required 
                />
                <button type="submit" className="submit-btn">Додати користувача</button>
            </form>

            <h3>Список контактів:</h3>
            {contacts.length === 0 ? (
                <p>Телефонна книга поки порожня.</p>
            ) : (
                <div className="contacts-list">
                    {contacts.map((contact, index) => (
                        <div key={index} className="contact-card">
                            <strong>{contact.firstName} {contact.lastName}</strong>
                            <div>{contact.phone}</div>
                            <div>{contact.email}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Phonebook;