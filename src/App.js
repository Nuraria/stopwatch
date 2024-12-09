import React from "react";

function App() {
  const [time, setTime] = React.useState(0);
  const [run, setRun] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (run) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!interval) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [run]);

  return (
    <div className="flex flex-col items-center my-7">
      <h1 className="font-bold text-3xl">Stopwatch</h1>
      <div className="flex my-8">
        <span className="text-xl">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="text-xl">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        </span>
        <span className="text-xl">{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {run ? (
          <button
            className="border-solid border-2 border-sky-500 p-1 px-3 rounded-2xl"
            onClick={() => setRun(false)}
          >
            Stop
          </button>
        ) : (
          <button
            className="border-solid border-2 border-sky-500 p-1 px-3 rounded-2xl"
            onClick={() => setRun(true)}
          >
            Start
          </button>
        )}
        <button
          className="border-solid border-2 border-red-800 p-1 px-3 rounded-2xl"
          onClick={() => setTime((prev) => (prev = 0))}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
