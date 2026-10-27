export interface AccordionType {
  name: string;
  iconType?: 'arrow' | 'plus';
  join?: boolean;
  multiple?: boolean;
  options: AccordionOption[];
  className?: string;
}

export interface AccordionOption {
  key?: string;
  header: React.ReactNode;
  body: React.ReactNode;
}
