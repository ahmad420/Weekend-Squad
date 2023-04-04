import React, { useState } from "react";
import Item from "../components/Item";
import { Container, Form, Button, ListGroup } from "react-bootstrap";

const List = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() === "") return;
    setItems([...items, { id: Date.now(), text: inputValue }]);
    setInputValue("");
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEditItem = (id, newText) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  const handleAddToFavorites = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  return (
    <Container className="my-5">
      <h1>My List</h1>
      <Form className="my-3">
        <Form.Group controlId="itemInput" className="d-flex mx-2">
          <Form.Control
            type="text"
            placeholder="Enter item"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Button variant="primary" className="mx-2" onClick={handleAddItem}>
            Add
          </Button>
        </Form.Group>
      </Form>
      <ListGroup className=" mx-2">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onRemoveItem={handleRemoveItem}
            onEditItem={handleEditItem}
            onAddToFavorites={handleAddToFavorites}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

export default List;
