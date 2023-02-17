import { RequestHandler } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car.service';

export default class CarController {
  constructor(private _service = new CarService()) {}

  public create: RequestHandler = async (req, res) => {
    const car: ICar = req.body;
    const newCar = await this._service.create(car);

    return res.status(201).json(newCar);
  };
}