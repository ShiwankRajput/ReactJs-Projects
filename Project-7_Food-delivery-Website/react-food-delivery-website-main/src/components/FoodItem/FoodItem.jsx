import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item-card">
      <div className="food-image-container">
        <img 
          className="food-image" 
          src={image || assets.placeholder_food} 
          alt={name || "Food item"} 
          onError={(e) => {
            e.target.src = assets.placeholder_food;
            e.target.style.objectFit = "contain";
            e.target.style.padding = "20px";
            e.target.style.backgroundColor = "#f9f9f9";
          }}
        />
        
        <div className="cart-action-container">
          {!cartItems[id] ? (
            <button 
              className="add-to-cart-button"
              onClick={() => addToCart(id)}
              aria-label={`Add ${name} to cart`}
            >
              <div className="plus-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </button>
          ) : (
            <div className="quantity-control">
              <button 
                className="quantity-button minus"
                onClick={() => removeFromCart(id)}
                aria-label="Remove one"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <span className="quantity-number">{cartItems[id]}</span>
              <button 
                className="quantity-button plus"
                onClick={() => addToCart(id)}
                aria-label="Add one"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4V20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      
      <div className="food-details">
        <div className="title-rating">
          <h3 className="food-title">{name}</h3>
          <img 
            className="rating-stars" 
            src={assets.rating_starts} 
            alt="Rating" 
          />
        </div>
        <p className="food-description">
          {description?.length > 60 
            ? `${description.substring(0, 60)}...` 
            : description}
        </p>
        <div className="price-container">
          <span className="price">${price?.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;