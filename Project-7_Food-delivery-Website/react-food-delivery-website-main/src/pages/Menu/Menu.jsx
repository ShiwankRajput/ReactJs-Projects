// src/pages/Menu/Menu.js
import "./Menu.css";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import { FaLeaf, FaIceCream, FaUtensils } from "react-icons/fa";

const Menu = () => {
  const { food_list } = useContext(StoreContext);

  // Group items by category
  const categories = {};
  food_list.forEach(item => {
    if (!categories[item.category]) {
      categories[item.category] = [];
    }
    categories[item.category].push(item);
  });

  // Special category icons
  const categoryIcons = {
    "Dessert": <FaIceCream className="category-icon" />,
    "Pure Veg": <FaLeaf className="category-icon" style={{ color: '#10b981' }} />,
    "Pasta": <FaUtensils className="category-icon" />
  };

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section className="menu-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Culinary Delights</h1>
          <p className="hero-subtext">
            From fresh pastas to decadent desserts - all crafted with care
          </p>
          <div className="special-tags">
            <span className="tag veg"><FaLeaf /> 100% Vegetarian</span>
            <span className="tag dessert"><FaIceCream /> Dessert Specials</span>
            <span className="tag pasta"><FaUtensils /> Pasta Selection</span>
          </div>
        </div>
      </section>

      {/* Menu List */}
      <section className="menu-list">
        {Object.entries(categories).map(([category, items]) => (
          <div key={category} className="menu-category">
            <div className="category-header">
              <h2 className="category-title">
                {categoryIcons[category] || <FaUtensils className="category-icon" />}
                {category}
              </h2>
              {category === "Pure Veg" && (
                <span className="veg-badge"><FaLeaf /> Vegetarian</span>
              )}
            </div>
            <div className="category-divider"></div>
            <ul className="food-items">
              {items.map((item, index) => (
                <li key={index} className="food-item">
                  <div className="food-info">
                    <h3 className="food-name">{item.name}</h3>
                    {item.description && <p className="food-description">{item.description}</p>}
                    {category === "Pure Veg" && (
                      <span className="veg-indicator"><FaLeaf /> Veg</span>
                    )}
                  </div>
                  <span className="food-price">${item.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Menu;
