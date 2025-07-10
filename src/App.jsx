import React, { useState } from 'react';
import SharedInput from './components/SharedInput';

function App() {
  const [formData, setFormData] = useState({
    username: '',
    description: '',
    agree: false,
    gender: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Attractive Shared Input Form</h2>

      <form onSubmit={handleSubmit}>
        <SharedInput
          type="text"
          name="username"
          label="Username"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
        />

        <SharedInput
          type="textarea"
          name="description"
          label="About You"
          placeholder="Tell us about yourself"
          value={formData.description}
          onChange={handleChange}
        />

        <SharedInput
          type="checkbox"
          name="agree"
          placeholder="I agree to the terms & conditions"
          checked={formData.agree}
          onChange={handleChange}
        />

        <SharedInput
          type="radio"
          name="gender"
          label="Gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
        />

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;