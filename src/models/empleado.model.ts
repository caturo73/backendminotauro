import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Empresa} from './empresa.model';

@model()
export class Empleado extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  edad: number;

  @property({
    type: 'number',
    required: true,
  })
  sueldo: number;

  @property({
    type: 'string',
    required: true,
  })
  fechaNacimiento: string;

  @property({
    type: 'boolean',
    required: true,
  })
  esDirectivo: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  esCliente: boolean;

  @property({
    type: 'string',
    required: false,
  })
  clave: string;

  @belongsTo(() => Empresa)
  empresaId: string;

  @property({
    type: 'string',
    required: true,
  })
  mensaje: string;

  constructor(data?: Partial<Empleado>) {
    super(data);
  }
}

export interface EmpleadoRelations {
  // describe navigational properties here
}

export type EmpleadoWithRelations = Empleado & EmpleadoRelations;
