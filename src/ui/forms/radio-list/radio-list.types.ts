import type { RadioType } from '@/types';

export interface RadioListType extends RadioType {
  options: Omit<RadioType, 'name'>[];
  className?: string;
}
