export interface AccordionType {
  name: string;
  iconType?: 'arrow' | 'plus';
  join?: boolean;
  multiple?: boolean;

  options: AccordionOption[];
}

export interface AccordionOption {
  header: React.ReactElement;
  body: React.ReactElement;
}
