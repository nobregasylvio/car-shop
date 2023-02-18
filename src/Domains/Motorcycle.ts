import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

export default class Motorcicle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcicle: IMotorcycle) {
    super(motorcicle);
    this.category = motorcicle.category;
    this.engineCapacity = motorcicle.engineCapacity;
  }
}