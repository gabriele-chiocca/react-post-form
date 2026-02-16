import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

const apiUrl = 'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts';

const initialFormData = {
  author: '',
  title: '',
  body: '',
  public: false, // false = bozza,
};

export default function App() {
  const [formData, setFormData] = useState(initialFormData);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.post(apiUrl, formData).then((res) => {
      console.log('Richiesta inviata ', res.data);
      setFormData(initialFormData);
    });
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">Libri</h1>
        <div className="row">
          <div className="col">
            <form onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleFormChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Inserisci il nome autore"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Inserisci il titolo del libro"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Descrizione
                </label>
                <textarea
                  className="form-control"
                  name="body"
                  value={formData.body}
                  onChange={handleFormChange}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Inserisci la descrizione del libro"
                ></textarea>
              </div>

              <div className="form-check">
                <input
                  name="public"
                  checked={formData.public}
                  onChange={handleFormChange}
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkDefaultSecond"
                />
                <label className="form-check-label" htmlFor="checkDefault">
                  Pubblicato
                </label>
              </div>
              <div>
                <button type="submit" className=" mt-4 btn btn-primary">
                  Invia
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
