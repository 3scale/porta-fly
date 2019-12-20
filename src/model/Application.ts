import Plan from './Plan'

export default interface Application {
  name: string;
  state: string;
  account: string;
  plan: Plan;
  created_at: number;
}
