import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

const initialFormData = {
  author: '',
  title: '',
  body: '',
  public: false,
};

export default function App() {
  axios
    .post('https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts')
    .then((res) => {
      console.log(res.data);
    });

  const [formData, setFormData] = useState(initialFormData);

  return <></>;
}
