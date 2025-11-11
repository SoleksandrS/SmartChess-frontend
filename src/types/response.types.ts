export interface IResponseMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface IAdvancedResponse<T> {
  data: T[];
  meta: IResponseMeta;
}
