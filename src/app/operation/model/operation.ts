
import { Account } from 'src/app/account/model/account';

export class Operation {
  id: number;
  compte: Account;
  date: Date;
  sommeEspece: number;
  sommeCompte: number;
  type: string;
}
