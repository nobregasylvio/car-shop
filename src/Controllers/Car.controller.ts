import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car.service';

export default class CarController {
  constructor(
    private _req: Request,
    private _res: Response,
    private _next: NextFunction,
    private _service = new CarService(),
  ) {}

  public async create() {
    const car: ICar = {
      model: this._req.body.model,
      year: this._req.body.year,
      color: this._req.body.color,
      status: this._req.body.status || false,
      buyValue: this._req.body.buyValue,
      doorsQty: this._req.body.doorsQty,
      seatsQty: this._req.body.seatsQty,
    };

    try {
      const newCar = await this._service.create(car);
      return this._res.status(201).json(newCar);
    } catch (error) {
      this._next(error);
    }
  }
}