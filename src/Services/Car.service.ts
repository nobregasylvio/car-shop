import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  constructor(private _model = new CarODM()) {}

  private createCarDomain = (car: ICar | null): Car | null => {
    if (car) return new Car(car);
    return null;
  };

  public create = async (car: ICar) => {
    const createdCar = await this._model.create(car);
    const result = this.createCarDomain(createdCar);

    return { type: null, message: result };
  };

  public findAll = async () => {
    const cars = await this._model.findAll();
    const result = cars.map((car) => this.createCarDomain(car));

    return { type: null, message: result };
  };

  public findById = async (id: string) => {
    if (!isValidObjectId(id)) return { type: 422, message: 'Invalid mongo id' };

    const car = await this._model.findById(id);
    if (!car) return { type: 404, message: 'Car not found' };

    const result = this.createCarDomain(car);

    return { type: null, message: result };
  };
}