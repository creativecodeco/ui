export type MockupVariantType = 'code' | 'browser' | 'window' | 'phone';

export interface MockupCodeLineType {
  /** Unique identifier for the code line */
  id?: React.Key;
  /** Line prefix symbol (e.g., '$', '>', '1') */
  prefix?: string;
  /** Code text content */
  text: React.ReactNode;
  /** Custom CSS classes for the line (e.g., 'bg-warning text-warning-content') */
  className?: string;
}

export interface MockupType {
  /** Type of mockup frame */
  type?: MockupVariantType;
  /** Code lines when type is 'code' */
  lines?: MockupCodeLineType[];
  /** Browser URL displayed in toolbar when type is 'browser' */
  url?: string;
  /** Inner content for browser, window, or phone mockups */
  children?: React.ReactNode;
  /** Custom CSS classes */
  className?: string;
}
