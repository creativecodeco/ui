export interface HeroType {
  /** Hero title element or string */
  title?: React.ReactNode;
  /** Hero description paragraph element or string */
  description?: React.ReactNode;
  /** Action buttons element or node */
  actions?: React.ReactNode;
  /** Background image URL or side image node */
  image?: string | React.ReactNode;
  /** Dark translucent background overlay */
  overlay?: boolean;
  /** Custom children elements */
  children?: React.ReactNode;
  /** Custom CSS classes */
  className?: string;
}
