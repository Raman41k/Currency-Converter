import {environment} from "../../environments/environment";

const {API} = environment;

const urls = {
  latest: (currency: string, symbols: string) => `${API}/latest?base=${currency}&symbols=${symbols}`,
  convertor: (amount:number,from:string,to:string) => `${API}/convert?from=${from}&to=${to}&amount=${amount}`
}

export {
  urls
}
