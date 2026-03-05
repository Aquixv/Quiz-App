import React, { useState, useEffect } from 'react';
import './Setup.css';
import { Link } from 'react-router-dom';

const Setup = ({ setQuizSettings }) => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    amount: 10,
    category: 9,
    difficulty: 'easy'
  });

  useEffect(() => {
    fetch('https://opentdb.com/api_category.php')
      .then(res => res.json())
      .then(data => setCategories(data.trivia_categories || [])) //
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className='container setup-card'>
      <h2>Customize Your Challenge</h2>
      <hr />
      
      <div className='settings-group'>
        <p>Select Your Topic</p>
        <select name="category" className="category-select" onChange={handleChange}>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className='settings-group'>
        <p>Number of Questions</p>
        <input 
          type="number" 
          name="amount"
          min="1" 
          max="20" 
          value={formData.amount} 
          onChange={handleChange} 
        />
      </div>
      <Link to="/quiz">
      <button className='start-btn' onClick={() => setQuizSettings(formData)}>
        Start Quiz
      </button>
       </Link>
    </div>
  );
};

export default Setup;