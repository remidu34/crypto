export interface ApiResponse<T> {
    data: T;
    timestamp: number;
    error: any;
  }
  