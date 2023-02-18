import { RequestHandler } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/motorcycle.service';

export default class MotorcycleController {
  constructor(private _service = new MotorcycleService()) {}

  public create: RequestHandler = async (req, res) => {
    const motorcycle: IMotorcycle = {
      model: req.body.model,
      year: req.body.year,
      color: req.body.color,
      status: req.body.status || false,
      buyValue: req.body.buyValue,
      category: req.body.category,
      engineCapacity: req.body.engineCapacity,
    };

    const { message } = await this._service.create(motorcycle);

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
    const updatedMotorcycle = req.body;
    const { type, message } = await this._service.update(id, updatedMotorcycle);
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