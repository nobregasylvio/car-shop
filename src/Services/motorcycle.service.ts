import { isValidObjectId } from 'mongoose';
import Motorcicle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

const msg = { invalid: 'Invalid mongo id', notFount: 'Motorcycle not found' };

export default class MotorcycleService {
  constructor(private _model = new MotorcycleODM()) {}

  private createMotorcycleDomain = (motorcycle: IMotorcycle | null): Motorcicle | null => {
    if (motorcycle) return new Motorcicle(motorcycle);
    return null;
  };

  public create = async (motorcycle: IMotorcycle) => {
    const createdMotorcycle = await this._model.create(motorcycle);
    const result = this.createMotorcycleDomain(createdMotorcycle);

    return { type: null, message: result };
  };

  public findAll = async () => {
    const motorcycles = await this._model.findAll();
    const result = motorcycles.map((motorcycle) => this.createMotorcycleDomain(motorcycle));

    return { type: null, message: result };
  };

  public findById = async (id: string) => {
    if (!isValidObjectId(id)) return { type: 422, message: msg.invalid };

    const motorcycle = await this._model.findById(id);
    if (!motorcycle) return { type: 404, message: msg.notFount };

    const result = this.createMotorcycleDomain(motorcycle);

    return { type: null, message: result };
  };

  public update = async (id: string, updatedMotorcycle: Partial<IMotorcycle>) => {
    if (!isValidObjectId(id)) return { type: 422, message: msg.invalid };

    const motorcycle = await this._model.update(id, updatedMotorcycle);
    if (!motorcycle) return { type: 404, message: msg.notFount };

    const result = this.createMotorcycleDomain(motorcycle);

    return { type: null, message: result };
  };

  public delete = async (id: string) => {
    if (!isValidObjectId(id)) return { type: 422, message: msg.invalid };
    
    const motorcycle = await this._model.delete(id);
    if (!motorcycle) return { type: 404, message: msg.notFount };

    return { type: null, message: null };
  };
}