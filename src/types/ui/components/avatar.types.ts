import { SizeType } from '@/types';

export interface AvatarType {
  src: string;
  size?: SizeType;
  withStatus?: boolean;
  isOnline?: boolean;
  rounded?: boolean;
  ring?: boolean;
}
