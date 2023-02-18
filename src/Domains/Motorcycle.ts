import IMotocycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motocicle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motocicle: IMotocycle) {
    super(motocicle);
    this.category = motocicle.category;
    this.engineCapacity = motocicle.engineCapacity;
  }
}