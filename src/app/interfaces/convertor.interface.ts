export interface IConvertor {
  date: string;
  historical: boolean;
  info: {
    rate: number;
  },
  motd: {
    msg: string;
    url: string;
  },
  query: {
    amount: number;
    from: string;
    to: string;
  },
  result: number;
  success: boolean;
}
