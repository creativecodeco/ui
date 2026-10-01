import type { ColorType, PositionType, SizeType } from '@/types';

export interface ToggleType {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  label?: string;
  position?: PositionType;

  color?: ColorType;
  size?: SizeType;

  disabled?: boolean;
  error?: string;
  name?: string;
  id?: string;
}
