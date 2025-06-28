export type Status = 'pendente' | 'em andamento' | 'feito';

export interface ListItem {
  id: number;
  title: string;
  description?: string;
  status: Status;
}
