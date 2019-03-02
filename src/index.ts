import {
  Resource,
  RequestShape,
  DeleteShape,
  ReadShape,
  MutateShape,
  Schema,
  SchemaArray,
  SchemaBase,
  SchemaOf,
  schemas,
} from './resource';
import NetworkManager from './state/NetworkManager';
import {
  useCache,
  useFetcher,
  useRetrieve,
  useResource,
  useResultCache,
  RestProvider,
  NetworkErrorBoundary,
} from './react-integration';
import { Request as RequestType } from 'superagent';
import { AbstractInstanceType } from './types';

export type DeleteShape<
S extends schemas.Entity,
Params extends Readonly<object>,
> = DeleteShape<S, Params>;
export type MutateShape<
S extends Schema,
Params extends Readonly<object>,
Body extends Readonly<object> | void
> = MutateShape<S, Params, Body>;
export type ReadShape<
S extends Schema,
Params extends Readonly<object>,
Body extends Readonly<object> | void
> = ReadShape<S, Params, Body>;
export type RequestShape<
S extends Schema,
Params extends Readonly<object>,
Body extends Readonly<object> | void
> = RequestShape<S, Params, Body>;

export type Schema<T = any> = Schema<T>;
export type SchemaArray<T> = SchemaArray<T>;
export type SchemaBase<T> = SchemaBase<T>;
export type SchemaOf<T> = SchemaOf<T>;
export type AbstractInstanceType<T> = AbstractInstanceType<T>;

export type Request = RequestType;

export {
  Resource,
  RestProvider,
  useCache,
  useFetcher,
  useRetrieve,
  useResource,
  useResultCache,
  NetworkManager,
  NetworkErrorBoundary,
  schemas,
};
