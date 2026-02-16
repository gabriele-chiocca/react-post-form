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
        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Example textarea
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
