import {
  DAYS_IN_WEEK,
  MONTH_LABEL_GUTTER_SIZE,
  SQUARE_SIZE,
} from "./constants";
import { convertToDate, getBeginningTimeForDate, shiftDate } from "./helpers";

// Sizes and transforms

const getSquareSizeWithGutter = (gutterSize: number) =>
  SQUARE_SIZE + gutterSize;

const getWeekWidth = (gutterSize: number) =>
  DAYS_IN_WEEK * getSquareSizeWithGutter(gutterSize);

const getMonthLabelSize = (show: boolean, isHorizontal: boolean) => {
  if (!show) return 0;
  return isHorizontal
    ? SQUARE_SIZE + MONTH_LABEL_GUTTER_SIZE
    : 2 * (SQUARE_SIZE + MONTH_LABEL_GUTTER_SIZE);
};

// Viewbox, width and height

const getWidth = (numDays: number, endDate: Date, gutterSize: number) =>
  getWeekCount(numDays, endDate) * getSquareSizeWithGutter(gutterSize) -
  gutterSize;

const getHeight = (
  gutterSize: number,
  showMonthLabels: boolean,
  isHorizontal: boolean,
) =>
  getWeekWidth(gutterSize) +
  (getMonthLabelSize(showMonthLabels, isHorizontal) - gutterSize);

// Dates

const getEndDate = (endDate: Date) =>
  getBeginningTimeForDate(convertToDate(endDate));

const getStartDate = (numDays: number, endDate: Date) =>
  shiftDate(getEndDate(endDate), -numDays + 1);

const getNumEmptyDaysAtStart = (numDays: number, endDate: Date) =>
  getStartDate(numDays, endDate).getDay();

const getNumEmptyDaysAtEnd = (endDate: Date) =>
  DAYS_IN_WEEK - 1 - getEndDate(endDate).getDay();

const getStartDateWithEmptyDays = (numDays: number, endDate: Date) =>
  shiftDate(
    getStartDate(numDays, endDate),
    -getNumEmptyDaysAtStart(numDays, endDate),
  );

const getWeekCount = (numDays: number, endDate: Date) => {
  const totalDays =
    numDays +
    getNumEmptyDaysAtStart(numDays, endDate) +
    getNumEmptyDaysAtEnd(endDate);
  return Math.ceil(totalDays / DAYS_IN_WEEK);
};

// Coordinates

const getSquareCoordinates = (
  dayIndex: number,
  isHorizontal: boolean,
  gutterSize: number,
) =>
  isHorizontal
    ? [0, dayIndex * getSquareSizeWithGutter(gutterSize)]
    : [dayIndex * getSquareSizeWithGutter(gutterSize), 0];

const getTransformForWeek = (
  weekIndex: number,
  isHorizontal: boolean,
  gutterSize: number,
  showMonthLabels: boolean,
): [number, number] => {
  const x = weekIndex * getSquareSizeWithGutter(gutterSize);
  if (isHorizontal) {
    const y = showMonthLabels
      ? getMonthLabelSize(showMonthLabels, isHorizontal)
      : 0;
    return [x, y];
  }
  return [10, x];
};

const getMonthLabelCoordinates = (
  weekIndex: number,
  isHorizontal: boolean,
  gutterSize: number,
): [number, number] =>
  isHorizontal
    ? [weekIndex * getSquareSizeWithGutter(gutterSize), 0]
    : [0, (weekIndex + 1) * getSquareSizeWithGutter(gutterSize) - 2];

// Tooltip and titles

const getTooltipDataAttrsForValue = (value: any, attrs: any) =>
  typeof attrs === "function" ? attrs(value) : attrs;

const getTooltipDataAttrsForIndex = (
  index: number,
  valueCache: any,
  tooltipDataAttrs: any,
) =>
  valueCache[index]?.tooltipDataAttrs ??
  getTooltipDataAttrsForValue({ date: null, count: null }, tooltipDataAttrs);

const getTitleForIndex = (
  index: number,
  valueCache: any,
  titleForValue?: (value: any) => string | null,
) => valueCache[index]?.title ?? (titleForValue ? titleForValue(null) : null);

// Cores

const findColorLevel = (count: number, colors: string[]) => {
  if (count === 0) return colors[0];
  if (count <= 3) return colors[1];
  if (count <= 9) return colors[2];
  if (count <= 17) return colors[3];
  if (count <= 25) return colors[4];
  return colors[5];
};

const getFillColor = (
  index: number,
  valueCache: any,
  rectColor: string[],
  rectBackground: string,
) =>
  valueCache[index]
    ? findColorLevel(valueCache[index].countedArray.count, rectColor)
    : rectBackground;

// Auxiliary

const getCountByDuplicateValues = (array: { date: string }[]) => {
  const map: Record<string, number> = {};

  for (const item of array) {
    map[item.date] = (map[item.date] || 0) + 1;
  }

  return Object.entries(map).map(([key, count]) => ({ key, count }));
};

// Exports

export {
  getCountByDuplicateValues,
  getFillColor,
  getHeight,
  getMonthLabelCoordinates,
  getNumEmptyDaysAtStart,
  getSquareCoordinates,
  getStartDateWithEmptyDays,
  getTitleForIndex,
  getTooltipDataAttrsForIndex,
  getTooltipDataAttrsForValue,
  getTransformForWeek,
  getWeekCount,
  getWidth,
};

export default {
  getWeekCount,
  getStartDateWithEmptyDays,
  getMonthLabelCoordinates,
  getTransformForWeek,
  getNumEmptyDaysAtStart,
  getSquareCoordinates,
  getTitleForIndex,
  getFillColor,
  getCountByDuplicateValues,
  getTooltipDataAttrsForIndex,
  getTooltipDataAttrsForValue,
  getHeight,
  getWidth,
};
