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
  public: false,
};

export default function App() {
  axios.post(apiUrl).then((res) => {
    console.log(res.data);
  });

  const [formData, setFormData] = useState(initialFormData);

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5">Libri</h1>
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Author
                </label>
                <input
                  type="email"
                  class="form-control"
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
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Inserisci il titolo del libro"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Inserisci la tua email"
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
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Inserisci la descrizione del libro"
                ></textarea>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkDefault"
                />
                <label className="form-check-label" htmlFor="checkDefault">
                  Bozza
                </label>
              </div>
              <div className="form-check">
                <input
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
                <button type="submit" class=" mt-4 btn btn-primary">
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
