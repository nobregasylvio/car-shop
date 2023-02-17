import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

const msg = { invalid: 'Invalid mongo id', notFount: 'Car not found' };

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
    if (!isValidObjectId(id)) return { type: 422, message: msg.invalid };

    const car = await this._model.findById(id);
    if (!car) return { type: 404, message: msg.notFount };

    const result = this.createCarDomain(car);

    return { type: null, message: result };
  };

  public update = async (id: string, updatedCar: Partial<ICar>) => {
    if (!isValidObjectId(id)) return { type: 422, message: msg.invalid };

    const car = await this._model.update(id, updatedCar);
    if (!car) return { type: 404, message: msg.notFount };

    const result = this.createCarDomain(car);

    return { type: null, message: result };
  };

  public delete = async (id: string) => {
    if (!isValidObjectId(id)) return { type: 422, message: msg.invalid };
    
    const car = await this._model.delete(id);
    if (!car) return { type: 404, message: msg.notFount };

    return { type: null, message: null };
  };
}