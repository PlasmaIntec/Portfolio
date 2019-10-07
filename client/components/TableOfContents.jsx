import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Card from "./Card.jsx";
import update from "immutability-helper";
import ItemTypes from "../constants/ItemTypes.js";
import counter from '../utils/Counter.js';

import "../styles/TableOfContents.css";

const ITEMS = [
  {
    id: 1,
    text: "Write a cool JS library"
  },
  {
    id: 2,
    text: "Make it generic enough"
  },
  {
    id: 3,
    text: "Write README"
  },
  {
    id: 4,
    text: "Create some examples"
  },
  {
    id: 5,
    text: "Spam in Twitter and IRC to promote it"
  },
  {
    id: 6,
    text: "???"
  },
  {
    id: 7,
    text: "PROFIT"
  }
];
const TableOfContents = () => {
  const [cards, setCards] = useState(ITEMS);
  const [count, setCount] = useState(counter);
  const moveCard = (id, atIndex) => {
    const { card, index } = findCard(id);
    setCards(
      update(cards, {
        $splice: [[index, 1], [atIndex, 0, card]]
      })
    );
  };
  const findCard = id => {
    const card = cards.filter(c => `${c.id}` === id)[0];
    return {
      card,
      index: cards.indexOf(card)
    };
  }
  const [, drop] = useDrop({
    accept: ItemTypes.CARD
  });
  const counterStatus = count.getStatus();
  return (
    <div className="toc">
      <h2 className="toc-header">
        Table Of Contents
      </h2>
      <div className="blob-container">
        <div className={`blob red ${counterStatus === 'red' ? 'pulse' : null}`} />
        <div className={`blob yellow ${counterStatus === 'yellow' ? 'pulse' : null}`} />
        <div className={`blob green ${counterStatus === 'green' ? 'pulse' : null}`} />
      </div>
      <i class="fas fa-book"></i>
      <div className="toc-main" ref={drop} >
        {cards.map(card => (
          <Card
            key={card.id}
            id={`${card.id}`}
            text={card.text}
            moveCard={moveCard}
            findCard={findCard}
          />
        ))}
      </div>
    </div>
  );
};
export default TableOfContents;
