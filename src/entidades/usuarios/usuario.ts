export interface IUsuario {
  _id: string;
  username: string;
  hash: string;
  salt: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  deactivatedAt: Date;
  active: boolean;
}
