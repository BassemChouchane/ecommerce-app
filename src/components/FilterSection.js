import React, { useEffect, useState } from 'react'

export default function FilterSection() {


  const [categories, setCategories] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  useEffect(() => {
    fetch('../../data/categories.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((categories) => {setCategories(categories);
      setIsLoading(false)})
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);


    return (
      <div >
        <input type="text" />
        <h3>Company</h3>
        <ul style={{display : 'flex' , flexDirection : "column"}}>
          {categories.map((category) =>(
            <li>{category.name}</li> 
          ))}
        </ul>
        
      </div>
      
    )
}
