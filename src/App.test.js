import React from 'react';
import { render } from '@testing-library/react';
import Card from './Components/Card/Card';
import events from '../src/db/events.json'

describe('Teste renderização do Card', () => {

  it('Renderiza o card com propriedades válidas', () => {

    const data = "10/12 e 11/12";
    const description = "Teste teste teste teste teste teste teste";

    const { getByText, getByAltText } = render(<Card data={data} image={events.image} description={description} />);

    // Verifica se o texto da prop "data" está renderizado corretamente
    expect(getByText(data)).toBeTruthy();

    // Verifica se a imagem é renderizada corretamente, caso ela exista
    if (events.image) {
      expect(getByAltText(events.image)).toBeTruthy();
    }

    // Verifica se o texto da prop "description" está renderizado corretamente
    expect(getByText(description)).toBeTruthy();
  });
});
