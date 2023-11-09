export default function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const time = payload[0]?.payload?.time;

    let labelTime;
    let strToArr;
    let minutes;
    let units;
    if (time > 12) {
      labelTime = `${time - 12}pm`;
    } else {
      strToArr = `${time}`.split(".");

      if (strToArr[1]) {
        units = +strToArr[1] / 10;
        minutes = Math.floor(60 * units);

        labelTime = `${strToArr[0]}:${minutes}am`;
      } else {
        labelTime = `${time}am`;
      }
    }

    return (
      <div className="custom-tooltip" style={{ fontSize: "16px" }}>
        <p>{label}</p>
        <p>time: {labelTime}</p>
      </div>
    );
  }

  return null;
}
