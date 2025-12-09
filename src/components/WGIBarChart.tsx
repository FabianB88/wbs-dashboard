import { ValueKey, ValueLabels } from "../types";
import "../styles/WGIBarChart.css";

interface WGIBarChartProps {
  values: Record<ValueKey, number>;
  labels: ValueLabels;
  title?: string;
}

export default function WGIBarChart({ values, labels, title = "WereldGezondheidsIndex (WGI)" }: WGIBarChartProps) {
  // Vind de hoogste waarde voor normalisatie
  const maxValue = Math.max(...Object.values(values), 1); // minimaal 1 om deling door 0 te voorkomen

  // Bereken percentages voor elke balk
  const getPercentage = (value: number) => {
    return Math.max(0, (value / maxValue) * 100);
  };

  const getBarColor = (key: ValueKey): string => {
    const colors = {
      value1: "var(--han-magenta)",
      value2: "#00A651", // groen voor "Schoon"
      value3: "#FF8C00", // oranje voor "Sociaal"
    };
    return colors[key];
  };

  return (
    <div className="wgi-chart">
      <h3 className="wgi-title">{title}</h3>
      <div className="wgi-bars">
        {(["value1", "value2", "value3"] as ValueKey[]).map((key) => (
          <div key={key} className="wgi-bar-container">
            <div className="wgi-bar-label">{labels[key]}</div>
            <div className="wgi-bar-wrapper">
              <div
                className="wgi-bar"
                style={{
                  width: `${getPercentage(values[key])}%`,
                  backgroundColor: getBarColor(key),
                }}
              >
                <span className="wgi-bar-value">{values[key]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
