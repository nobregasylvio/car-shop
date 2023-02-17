import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/Car.service';
import { inputCar, outputCar } from '../../mock/car.mock';

describe('Valida as informações no carService', function () {
  describe('Valida se é possível cadastrar um carro', function () {
    it('Verifica se é possível cadastrar um carro', async function () {
      sinon.stub(Model, 'create').resolves(outputCar[0]);
  
      const service = new CarService();
      const { message } = await service.create(inputCar);
  
      expect(message).to.be.deep.equal(outputCar[0]);
    });
  });

  describe('Valida se é possível listar os carros', function () {
    it('Verifica se é possivel listar todos os carros', async function () {
      sinon.stub(Model, 'find').resolves(outputCar);
      
      const service = new CarService();
      const { message } = await service.findAll();

      expect(message).to.be.deep.equal(outputCar);
    });

    it('Verifica se é possivel listar os carros filtrando por id', async function () {
      sinon.stub(Model, 'findById').resolves(outputCar[1]);

      const service = new CarService();
      const { message } = await service.findById('63efdffdc5da4d7ddd3d3e22');

      expect(message).to.be.deep.equal(outputCar[1]);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});