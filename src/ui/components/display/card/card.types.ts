export interface CardType {
  children?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  compact?: boolean;
  bordered?: boolean;
  glass?: boolean;
  className?: string;
}
