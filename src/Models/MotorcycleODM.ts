import { Schema } from 'mongoose';
import IMotocycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotocycleODM extends AbstractODM<IMotocycle> {
  constructor() {
    const schema = new Schema<IMotocycle>({
      model: { type: String },
      year: { type: Number },
      color: { type: String },
      status: { type: Boolean },
      buyValue: { type: Number },
      category: { type: String },
      engineCapacity: { type: Number },
    });
    super(schema, 'Motorcycle');
  }
}