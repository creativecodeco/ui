import type { ColorType, ErrorType, PositionType, SizeType } from '@/types';

export interface ToggleType extends ErrorType {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  label?: string;
  position?: PositionType;

  color?: ColorType;
  size?: SizeType;

  disabled?: boolean;
  name?: string;
  id?: string;
  className?: string;
}
