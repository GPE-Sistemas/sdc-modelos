export interface IUsuario {
  _id: string;
  username: string;
  hash: string;
  salt: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
  deactivatedAt: string;
  active: boolean;
}
