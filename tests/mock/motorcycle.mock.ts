import IMotorcycle from '../../src/Interfaces/IMotorcycle';

export const inputMotorcycle: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

export const outputMotorcycle: IMotorcycle[] = [
  {
    id: '1hj23g3ghkjhbj231',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  }, {
    id: '63efdffdc5da4d7ddd3d3e23',
    model: 'Dafra horizon 300cc',
    year: 2015,
    color: 'black',
    status: true,
    buyValue: 16.000,
    category: 'Custom',
    engineCapacity: 300,
  },
];