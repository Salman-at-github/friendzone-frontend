// CardContainer.js

import React from 'react';
import Card from './Card';

const CardContainer = () => {
  // Sample data for each card
  const cardsData = [
    {
      title: 'Kitty Basket',
      date: '2024-03-04T18:35:48.878+00:00',
      content: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Product 1',
      date: '2024-03-04T11:35:48.878+00:00',
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Product 1',
      date: '2024-03-04T11:35:48.878+00:00',
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Product 1',
      date: '2024-03-04T11:35:48.878+00:00',
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Product 1',
      date: '2024-03-04T11:35:48.878+00:00',
      content: 'Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Product 1',
      date: '2024-03-04T11:35:48.878+00:00',
      content: 'Lorem ipsum dolor sit amet.',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-8 bg-gray-300 gap-1 sm:px-20 py-20">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardContainer;
