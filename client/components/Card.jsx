import React from "react";
import { useDrag, useDrop } from "react-dnd";
import ItemTypes from "../constants/ItemTypes.js";
import counter from "../utils/Counter.js";
const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move"
};
const Card = ({ id, text, moveCard, findCard }) => {
  const originalIndex = findCard(id).index;
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, originalIndex },
    collect: monitor => {
      return {
        isDragging: monitor.isDragging()
      };
    }
  });
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    // canDrop: () => false,
    hover({ id: draggedId }) {
      if (draggedId !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedId, overIndex);
        counter.updateCount(draggedId, overIndex);
      }
    }
  });
  const opacity = isDragging ? 0 : 1;
  return (
    <div
      className="card"
      ref={node => drag(drop(node))}
      style={{ ...style, opacity }}
    >
      {text}
    </div>
  );
};
export default Card;
