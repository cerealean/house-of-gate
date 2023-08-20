import { IStoredMetadata } from 'src/app/data/models/i-stored-metadata';
import { Environments } from 'src/app/data/static/environments';

export interface IHappening extends IStoredMetadata {
  id: string;
  text: string;
  environments: Environments[];
  possibleOutcomes: HappeningPossibleOutcomes[];
}

export enum HappeningPossibleOutcomes {
  GainsCurrency,
  LosesCurrency,
  GainsStatusEffect,
  LosesStatusEffect,
  GainsItem,
  LosesItem,
  GainsHealth,
  LosesHealth,
  GainsTemporaryHealth,
  GainsInspiration,
  CausesEncounter,
  IncreasesExhaustion,
  GainsRations,
  LosesRations
}
