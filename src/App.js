import "./App.css";
import contactsData from "./contacts.json";
import React, { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  const handleAddRandom = () => {
    const randomContact =
      contactsData[Math.floor(Math.random() * contactsData.length)];
    if (contacts.length === contactsData.length) return;
    if (contacts.some((elem) => elem.id === randomContact.id)) {
      handleAddRandom();
    } else {
      setContacts([...contacts, randomContact]);
    }
  };

  return (
    <div className="App">
      <h1> Iron Contacts</h1>
      <button onClick={handleAddRandom}> Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt="contact-img"></img>
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{contact.wonOscar && "🏆"}</td>
                <td>{contact.wonEmmy && "🏅"}</td>
                <td>
                  <button></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
