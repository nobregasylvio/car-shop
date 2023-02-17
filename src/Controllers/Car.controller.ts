import { RequestHandler } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car.service';

export default class CarController {
  constructor(private _service = new CarService()) {}

  public create: RequestHandler = async (req, res) => {
    const car: ICar = req.body;
    const { message } = await this._service.create(car);

    return res.status(201).json(message);
  };

  public findAll: RequestHandler = async (req, res) => {
    const { message } = await this._service.findAll();

    return res.status(200).json(message);
  };

  public findByid: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await this._service.findById(id);
    if (type) return res.status(type).json({ message });

    return res.status(200).json(message);
  };

  public update: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const updatedCar = req.body;
    const { type, message } = await this._service.update(id, updatedCar);
    if (type) return res.status(type).json({ message });

    return res.status(200).json(message);
  };

  public delete: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const { type, message } = await this._service.delete(id);
    if (type) return res.status(type).json({ message });

    return res.sendStatus(204);
  };
}