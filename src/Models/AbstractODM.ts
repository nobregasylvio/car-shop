import {
  Model,
  models,
  Schema,
  model,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public create = async (obj: T): Promise<T> => this.model.create({ ...obj });

  public findAll = async (): Promise<T[]> => this.model.find();

  public findById = async (id: string): Promise<T | null> => this.model.findById(id);

  public update = async (id: string, objUpdate: Partial<T>): Promise<T | null> => {
    const result = this.model.findByIdAndUpdate(id, objUpdate, { new: true });
    return result;
  };
}

export default AbstractODM;