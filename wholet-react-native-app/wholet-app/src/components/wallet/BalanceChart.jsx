import React from "react";
import { View } from "react-native";
import Svg, { Path, Circle } from "react-native-svg";

/**
 * Lightweight balance history line chart (Graphs.png / "graph/line").
 * Renders a smooth path through `points` (array of 0-1 normalized y values)
 * with no external charting dependency.
 */
export default function BalanceChart({ points = [], width = 343, height = 90, color = "#FFFFFF" }) {
  if (!points.length) return <View style={{ width, height }} />;

  const stepX = width / (points.length - 1);
  const coords = points.map((p, i) => [i * stepX, height - p * height]);

  const path = coords.reduce((acc, [x, y], i) => {
    if (i === 0) return `M ${x} ${y}`;
    const [px, py] = coords[i - 1];
    const cx = (px + x) / 2;
    return `${acc} C ${cx} ${py}, ${cx} ${y}, ${x} ${y}`;
  }, "");

  const activeIndex = Math.floor(points.length / 2);
  const [activeX, activeY] = coords[activeIndex];

  return (
    <Svg width={width} height={height}>
      <Path d={path} stroke={color} strokeWidth={2} fill="none" />
      <Circle cx={activeX} cy={activeY} r={5} fill="#FFFFFF" />
      <Circle cx={activeX} cy={activeY} r={9} fill="#FFFFFF" opacity={0.3} />
    </Svg>
  );
}
