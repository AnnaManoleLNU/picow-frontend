export default function TitleSection() {
  return (
    <div className="flex flex-col items-center justify-between pt-24 pb-10">
      <h1 className="text-8xl font-bold mb-2">Anna's Office</h1>
      <p className="text-sm text-center text-slate-500">
        Using <b>Pico W</b> and <b>DHT11</b> to monitor the data and <b>Adafruit IO</b> to store/fetch it. A flashing border indicates a new value.
      </p>
    </div>
  );
}
