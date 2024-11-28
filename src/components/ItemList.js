

import { useEffect, useState } from "react";
import axios from "axios";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("/api/items");
        setItems(response.data);  // Axios automatically parses the response
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name} - {item.email}</li>
        ))}
      </ul>
    </div>
  );
}
