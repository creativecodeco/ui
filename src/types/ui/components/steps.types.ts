import type { ColorType } from '@/types';

export interface StepItem {
  id?: string;
  title: React.ReactNode;
  color?: ColorType;
  icon?: React.ReactNode;
}

export interface StepsType {
  items: StepItem[];
  activeStep?: number;
  vertical?: boolean;
}
