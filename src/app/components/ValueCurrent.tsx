import { useEffect, useState } from "react";

type ValueCurrentProps = {
  type: string;
  feed: string;
};

export default function ValueCurrent({ type, feed }: ValueCurrentProps) {
  const [value, setValue] = useState(0);
  const [animate, setAnimate] = useState(false);
  const title = type.charAt(0).toUpperCase() + type.slice(1); // Capitalize the first letter of the type

  // Fetch environment data from Adafruit IO
  const fetchData = async () => {
    const response = await fetch(
      `https://io.adafruit.com/api/v2/AnnaManole/feeds/${feed}/data/last`,
      {
        headers: {
          "X-AIO-Key": process.env.NEXT_PUBLIC_ADAFRUIT_KEY as string,
        },
      }
    );
    const data = await response.json();
    const newValue = data.value;
    if (newValue !== value) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 3000);
    }
    setValue(newValue);
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className={`relative overflow-hidden rounded-3xl w-80 h-32 flex flex-col items-center justify-center p-20 ${animate ? "animated-border" : "static-border"}`}>
      <h1 className="text-2xl font-bold text-slate-500">{title}</h1>
      <p className="text-2xl font-bold">{value}{type === "temperature" ? "°C" : "%"}</p>
    </div>
  );
}
