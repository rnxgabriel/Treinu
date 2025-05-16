import _ from "lodash";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Svg, { G, Rect, Text } from "react-native-svg";
import {
  CalendarHeatMapProps,
  CountedValue,
  ValueCache,
  ValueItem,
} from "./types";
import {
  DAYS_IN_WEEK,
  MILLISECONDS_IN_ONE_DAY,
  MONTH_LABELS,
  SQUARE_SIZE,
} from "./utils/constants";
import { convertToDate, shiftDate } from "./utils/helpers";
import {
  getCountByDuplicateValues,
  getFillColor,
  getHeight,
  getMonthLabelCoordinates,
  getNumEmptyDaysAtStart,
  getSquareCoordinates,
  getStartDateWithEmptyDays,
  getTitleForIndex,
  getTooltipDataAttrsForIndex,
  getTransformForWeek,
  getWeekCount,
  getWidth,
} from "./utils/utils";

const rectColor = ["#d6e685", "#8cc665", "#44a340", "#1e6823"];

export function CalendarHeatMap({
  values,
  gutterSize = 1,
  horizontal = true,
  numDays = 200,
  endDate = new Date(),
  titleForValue = () => "",
  tooltipDataAttrs,
  onPress = () => {},
  showOutOfRangeDays = false,
  monthLabelsColor = "#ccc",
  showMonthLabels = true,
  colorArray = rectColor,
  backgroundRectColor = "#ccc",
}: CalendarHeatMapProps) {
  const [valueCache, setValueCache] = useState<ValueCache>(() =>
    getValueCache(values),
  );

  function getValueCache(values: ValueItem[]): ValueCache {
    const countedArray = getCountByDuplicateValues(
      values.map((value) => ({ date: value.date.toString() })),
    );
    return values.reduce<ValueCache>((memo, value) => {
      const date = convertToDate(value.date);
      const index = Math.floor(
        (date.getTime() -
          getStartDateWithEmptyDays(
            numDays,
            convertToDate(endDate),
          ).getTime()) /
          MILLISECONDS_IN_ONE_DAY,
      );
      memo[index] = { value };
      const count = countedArray.find(
        (c: CountedValue) => c.key === value.date.toString(),
      );
      memo[index].countedArray = count;
      return memo;
    }, {});
  }

  useEffect(() => {
    setValueCache(getValueCache(values));
  }, [values]);

  function handleClick(index: number, date: string) {
    if (onPress) {
      onPress(index, date);
    }
  }

  function renderSquare(dayIndex: number, index: number) {
    const endDateAsDate = convertToDate(endDate);
    const startPadding = getNumEmptyDaysAtStart(numDays, endDateAsDate);
    const isOutOfRange =
      index < startPadding || index >= startPadding + numDays;

    if (isOutOfRange && !showOutOfRangeDays) return null;

    const [x, y] = getSquareCoordinates(dayIndex, horizontal, gutterSize);
    const fillColor = getFillColor(
      index,
      valueCache,
      colorArray,
      backgroundRectColor,
    );
    return (
      <Rect
        key={index}
        width={SQUARE_SIZE}
        height={SQUARE_SIZE}
        x={x}
        y={y}
        title={getTitleForIndex(index, valueCache, titleForValue)}
        onPress={() =>
          handleClick(index, valueCache[index]?.value.date.toString())
        }
        fill={fillColor}
        {...getTooltipDataAttrsForIndex(index, valueCache, tooltipDataAttrs)}
      />
    );
  }

  function renderWeek(weekIndex: number) {
    const [x, y] = getTransformForWeek(
      weekIndex,
      horizontal,
      gutterSize,
      showMonthLabels,
    );
    return (
      <G key={weekIndex} x={x} y={y}>
        {_.range(DAYS_IN_WEEK).map((dayIndex) =>
          renderSquare(dayIndex, weekIndex * DAYS_IN_WEEK + dayIndex),
        )}
      </G>
    );
  }

  function renderAllWeeks() {
    const endDateAsDate = convertToDate(endDate);
    return _.range(getWeekCount(numDays, endDateAsDate)).map((weekIndex) =>
      renderWeek(weekIndex),
    );
  }

  function renderMonthLabels() {
    if (!showMonthLabels) return null;

    const endDateAsDate = convertToDate(endDate);
    const startDate = getStartDateWithEmptyDays(numDays, endDateAsDate);
    const weekRange = _.range(getWeekCount(numDays, endDateAsDate) - 1);

    return weekRange.map((weekIndex) => {
      const endOfWeek = shiftDate(startDate, (weekIndex + 1) * DAYS_IN_WEEK);
      const [x, y] = getMonthLabelCoordinates(
        weekIndex,
        horizontal,
        gutterSize,
      );

      if (endOfWeek.getDate() >= 1 && endOfWeek.getDate() <= DAYS_IN_WEEK) {
        return (
          <Text key={weekIndex} x={x} y={y + 16} stroke={monthLabelsColor}>
            {MONTH_LABELS[endOfWeek.getMonth()]}
          </Text>
        );
      }

      return null;
    });
  }

  return (
    <ScrollView horizontal>
      <Svg
        height={getHeight(gutterSize, showMonthLabels, horizontal)}
        width={getWidth(numDays, convertToDate(endDate), gutterSize)}
      >
        <G>{renderMonthLabels()}</G>
        <G>{renderAllWeeks()}</G>
      </Svg>
    </ScrollView>
  );
}
