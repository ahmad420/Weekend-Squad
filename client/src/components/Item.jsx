import React, { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import "../styles/components/item.css";

const Item = ({ item, onRemoveItem, onEditItem, onAddToFavorites }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item.text);

  const handleEditInputChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleEditItem = () => {
    onEditItem(item.id, editValue);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditValue(item.text);
  };

  const handleToggleFavorite = () => {
    onAddToFavorites(item.id);
  };

  return (
    <ListGroup.Item className="item">
      <div className="item-content">
        {isEditing ? (
          <>
            <input
              type="text"
              className="edit-input"
              value={editValue}
              onChange={handleEditInputChange}
            />
            <Button variant="primary" onClick={handleEditItem}>
              Save
            </Button>
            <Button variant="secondary" onClick={handleCancelEdit}>
              Cancel
            </Button>
          </>
        ) : (
          <>
            <span className={item.isFavorite ? "favorite" : ""}>
              {item.text}
            </span>
            <div className="item-buttons ">
              <Button variant="light" onClick={() => setIsEditing(true)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => onRemoveItem(item.id)}>
                Remove
              </Button>
              <Button
                variant={item.isFavorite ? "warning" : "outline-warning"}
                onClick={handleToggleFavorite}
              >
                {item.isFavorite ? "Remove from favorites" : "Add to favorites"}
              </Button>
            </div>
          </>
        )}
      </div>
    </ListGroup.Item>
  );
};

export default Item;
