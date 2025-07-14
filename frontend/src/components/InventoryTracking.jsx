import React, { useState, useEffect } from 'react';


const InventoryTrackingRecord = ({ type, name, details }) => (
  <button className="group w-full text-left py-2 px-3">
    <ul>
      <li className='flex flex-row justify-between items-center gap-10 group-hover:text-company' >
        <div className='ml-5'>
          <p className="text-sm text-gray-500 group-hover:text-company">Type: {type}</p>
          <h1 className="text-lg font-semibold">{name}</h1>
        </div>
        <div className='ml-10'>
        <p className="text-gray-700 group-hover:text-company">{details}</p>

        </div>
      </li>
    </ul>
  </button>
);

// Placeholder for data fetching
const fetchInventoryItemsFromDB = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, type: "Chemical", name: "Fipronil", details: "100mladsafafafafasf fskfkas 5" },
        { id: 2, type: "Equipment", name: "Sprayer X200", details: "2 units available" },
        { id: 3, type: "Chemical", name: "Cypermethrin", details: "500ml bottles x 10" },
        { id: 4, type: "Equipment", name: "Safety Goggles", details: "15 pairs in stock" },
      ]);
    }, 500); // Simulate network delay
  });
};

function InventoryTracking() {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadInventory = async () => {
      try {
        setLoading(true);
        const data = await fetchInventoryItemsFromDB();
        setInventoryItems(data);
      } catch (error) {
        console.error("Failed to fetch inventory items:", error);
      } finally {
        setLoading(false);
      }
    };
        loadInventory();
  }, []);

 return (
    <>
      <div className="flex flex-col">
        {loading && <p>Loading inventory...</p>}
        {!loading && inventoryItems.length === 0 && <p>No inventory items to display.</p>}
        {!loading && inventoryItems.map(item => (
          <InventoryTrackingRecord
            key={item.id}
            type={item.type}
            name={item.name}
            details={item.details}
          />
        ))}
      </div></>
      )
}

export default InventoryTracking;