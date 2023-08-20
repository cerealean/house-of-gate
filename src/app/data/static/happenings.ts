import {
  HappeningPossibleOutcomes,
  IHappening,
} from 'src/app/monsters/models/happenings';

export const currencyHappenings: IHappening[] = [
  {
    id: '',
    text: 'You happen upon a pouch containing {{currency}} lying on the ground. Take it with you?',
    environments: [],
    possibleOutcomes: [
      HappeningPossibleOutcomes.GainsCurrency
    ]
  },
  {
    id: '',
    text: 'You notice that your coinpurse isn\'t jingling as much as it did previously. Upon examination, you realize that you\'re missing {{currency}}! When did that happen?',
    environments: [
      'urban'
    ],
    possibleOutcomes: [
      HappeningPossibleOutcomes.LosesCurrency
    ]
  }
];
