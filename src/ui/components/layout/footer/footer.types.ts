export interface FooterLinkType {
  /** Unique identifier for the link */
  id?: React.Key;
  /** Link label */
  label: React.ReactNode;
  /** Optional href URL */
  href?: string;
  /** Optional click callback */
  onClick?: () => void;
}

export interface FooterSectionType {
  /** Unique identifier for the section */
  id?: React.Key;
  /** Section heading */
  title?: React.ReactNode;
  /** Links inside the section */
  links?: FooterLinkType[];
  /** Custom content inside the section */
  content?: React.ReactNode;
}

export interface FooterType {
  /** Array of footer column sections */
  sections?: FooterSectionType[];
  /** Brand or leading aside content */
  aside?: React.ReactNode;
  /** Center-align footer content */
  center?: boolean;
  /** Render columns horizontally */
  horizontal?: boolean;
  /** Custom children */
  children?: React.ReactNode;
  /** Custom CSS classes */
  className?: string;
}
