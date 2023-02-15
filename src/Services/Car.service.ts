import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  constructor(private _model = new CarODM()) {}

  private createCarDomain(car: ICar | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async create(car: ICar) {
    const createdCar = await this._model.create(car);
    return this.createCarDomain(createdCar);
  }
}