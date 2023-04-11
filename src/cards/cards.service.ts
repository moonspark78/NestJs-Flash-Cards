import { Injectable } from '@nestjs/common';
import { Card } from 'src/interfaces/card/card.interface';

@Injectable()
export class CardsService {
  getCards(): Promise<Card[]> {
    const cards = [
      {
        id: 1,
        question: 'What is the language of the Web',
        answer: 'JavaScript',
      },
      { id: 2, question: 'What is the coolest job', answer: 'Developper' },
    ];
    return new Promise((resolve) => {
      resolve(cards);
    });
  }
}
