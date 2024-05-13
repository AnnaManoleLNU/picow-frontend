import ValueCurrent from "./ValueCurrent";

export default function THSection() {
  return (
    <div className="flex gap-10 justify-center">
      <ValueCurrent type="temperature" feed="picow-temp" />
      <ValueCurrent type="humidity" feed="picow-humid" />
    </div>
  );
}