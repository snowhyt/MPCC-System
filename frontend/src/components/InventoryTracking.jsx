import React, { useState, useEffect } from 'react';


const InventoryTrackingRecord = ({ type, name, details }) => (
  <div className="py-2 px-3 hover:text-company"> {/* Added some padding and hover effect for consistency with other cards */}
    <ul>
      <li className='flex flex-col'> {/* Changed to flex-col for vertical stacking */}
        <p className="text-sm text-gray-500">Type: {type}</p>
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="text-gray-700">{details}</p>
      </li>
    </ul>
    </div>
);

// Placeholder for data fetching
const fetchInventoryItemsFromDB = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 1, type: "Chemical", name: "Fipronil", details: "100ml bottles x 5" },
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