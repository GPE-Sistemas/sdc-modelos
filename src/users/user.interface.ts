import { UserRole } from "./userRoles.enum";

export interface IUsuario {
  username: string;
  hash: string;
  salt: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  deleted: boolean;
  active: boolean;
}
