export type TCardTypes = "All Pipelines" | "Sales" | "Marketing" | "Partners";

export interface ICards {
  id: number;
  title: string;
  count: number;
  price: string | null;
  type: TCardTypes;
  createAt: string;
}
