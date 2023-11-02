type VirtualScrollViewProp = {
  minHeight?: number;
  data: any[];
  itemHeight?: number;
  containerHeight?: number;
} & Partial<HTMLDivElement>;

export type { VirtualScrollViewProp };
