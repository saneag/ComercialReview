export interface LogsType {
  id: number;
  requestName: string;
  requestDuration: number;
  startTime: Date;
  endTime: Date;
  isSuccess: boolean;
}
