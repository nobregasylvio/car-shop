import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/motorcycle.service';
import {
  inputMotorcycle,
  outputMotorcycle,
  outputMotorcycleUpdated,
} from '../../mock/motorcycle.mock';

describe('Valida as informações no motorcycleService', function () {
  describe('Valida se é possível cadastrar uma moto', function () {
    it('Verifica se é possível cadastrar uma moto', async function () {      
      sinon.stub(Model, 'create').resolves(outputMotorcycle[0]);
  
      const service = new MotorcycleService();
      const { message } = await service.create(inputMotorcycle);
  
      expect(message).to.be.deep.equal(outputMotorcycle[0]);
    });
  });

  describe('Valida se é possível listar as motos', function () {
    it('Verifica se é possivel listar todas as motos', async function () {
      sinon.stub(Model, 'find').resolves(outputMotorcycle);
      
      const service = new MotorcycleService();
      const { message } = await service.findAll();

      expect(message).to.be.deep.equal(outputMotorcycle);
    });

    it('Verifica se é possivel listar as motos filtrando por id', async function () {
      sinon.stub(Model, 'findById').resolves(outputMotorcycle[1]);

      const service = new MotorcycleService();
      const { message } = await service.findById('63efdffdc5da4d7ddd3d3e23');

      expect(message).to.be.deep.equal(outputMotorcycle[1]);
    });
  });

  describe('Valida se é possível atualizar as informações de uma moto', function () {
    it('Verifica se atualiza as informações com sucesso', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(outputMotorcycleUpdated);

      const service = new MotorcycleService();
      const { message } = await service.update('63efdffdc5da4d7ddd3d3e23', { color: 'red' });
      
      expect(message).to.be.deep.equal(outputMotorcycleUpdated);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});