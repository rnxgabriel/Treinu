<<<<<<< HEAD
export type ValueItem = {
  date: string | number | Date;
  [key: string]: any;
};

export type CountedValue = {
  key: string;
  count: number;
};

export type CalendarHeatMapProps = {
  values: ValueItem[];
  numDays?: number;
  endDate?: string | number | Date;
  gutterSize?: number;
  horizontal?: boolean;
  showMonthLabels?: boolean;
  monthLabelsColor?: string;
  showOutOfRangeDays?: boolean;
  tooltipDataAttrs?:
    | Record<string, any>
    | ((value: ValueItem) => Record<string, any>);
  titleForValue?: (value: ValueItem) => string;
  classForValue?: (value: ValueItem) => string;
  onPress?: (index: number, date: string) => void;
  colorArray?: string[];
  backgroundRectColor?: string;
};

export type ValueCache = Record<
  number,
  {
    value: ValueItem;
    countedArray?: CountedValue;
  }
>;
=======
export type ValueItem = {
  date: string | number | Date;
  [key: string]: any;
};

export type CountedValue = {
  key: string;
  count: number;
};

export type CalendarHeatMapProps = {
  values: ValueItem[];
  numDays?: number;
  endDate?: string | number | Date;
  gutterSize?: number;
  horizontal?: boolean;
  showMonthLabels?: boolean;
  monthLabelsColor?: string;
  showOutOfRangeDays?: boolean;
  tooltipDataAttrs?:
    | Record<string, any>
    | ((value: ValueItem) => Record<string, any>);
  titleForValue?: (value: ValueItem) => string;
  classForValue?: (value: ValueItem) => string;
  onPress?: (index: number, date: string) => void;
  colorArray?: string[];
  backgroundRectColor?: string;
};

export type ValueCache = Record<
  number,
  {
    value: ValueItem;
    countedArray?: CountedValue;
  }
>;
>>>>>>> aba69a6bb940fdb5237ed6b14b51bf3e025b17df
