import { Client } from 'src/app/client/model/client';

export class Account {
  id: number;
  numero: string;
  type: string;
  solde: number;
  proprietaire: Client;
}
