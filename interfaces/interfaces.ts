export interface IRoot {
  users: IUser[];
  orders: IOrder[];
}

export interface IUser {
  id: number;
  name: string;
  image: string;
  age: number;
  content: string;
}

export interface IOrder {
  id: number;
  content: string;
  name: string;
  userId: number;
  quantity: number;
}
