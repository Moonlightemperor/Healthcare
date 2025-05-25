const days = [
  { day: "Mon", date: 25 },
  { day: "Tue", date: 26, active: true }, // full column active
  { day: "Wed", date: 27 },
  { day: "Thu", date: 28 },
  { day: "Fri", date: 29 },
  { day: "Sat", date: 30 },
  { day: "Sun", date: 31 },
];

const timeRows = [
  ["10:00", "08:00", "12:00", "10:00", "", "12:00", "09:00"],
  ["11:00", "09:00", "", "11:00", "14:00", "14:00", "10:00"],
  ["12:00", "10:00", "13:00", "", "16:00", "15:00", "11:00"],
];


const selectedCells = {
  1: ["09:00"], // Tuesday
  3: ["11:00"], // Thursday
  5: ["12:00"], // Saturday
  6: ["09:00"], // Sunday
};

export default function RightCalendarSection() {
  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-sm mt-2 text-[#2E3479]">October 2021</h2>
        <div className="flex gap-2 text-indigo-500 text-xl font-bold">
          <i className="ri-arrow-left-line" />
          <i className="ri-arrow-right-line" />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex  w-full gap-4">
        {days.map(({ day, date, active }, colIdx) => (
          <div
            key={colIdx}
            className={`flex flex-col items-center  w-15 gap-2 py-2 ${
              active ? "bg-indigo-100 rounded-xl" : ""
            }`}
          >
            {/* Day Header */}
            <div
              className={`flex flex-col items-center ${
                active
                  ? "text-[#2E3479] font-bold"
                  : colIdx === 6
                  ? "text-zinc-400 font-semibold ml-[-95%]"
                  : "text-[#2E3479] font-bold"
              }`}
            >
              <span className="text-sm">{day}</span>
              <span className="text-base">{date}</span>
            </div>

            {/* Time Cells */}
            {timeRows.map((row, rowIdx) => {
              const time = row[colIdx];
              const selectedTimes = selectedCells[colIdx] || [];
              const isSelected = selectedTimes.includes(time);
              const isTuesday = colIdx === 1 && time === "09:00";
              // For merging vertically adjacent selected time slots
              const isPrevSelected =
                colIdx > 0 &&
                selectedCells[colIdx - 1]?.includes(
                  timeRows[rowIdx][colIdx - 1]
                );
              const isNextSelected =
                colIdx < days.length - 1 &&
                selectedCells[colIdx + 1]?.includes(
                  timeRows[rowIdx][colIdx + 1]
                );

              let roundedClass = "";
              if (isSelected) {
                if (!isPrevSelected && isNextSelected) {
                  roundedClass = "rounded-l-md";
                } else if (isPrevSelected && !isNextSelected) {
                  roundedClass = "rounded-r-md";
                } else if (!isPrevSelected && !isNextSelected) {
                  roundedClass = "rounded-md";
                } // no radius in middle
              }

              return (
                <div
                  key={rowIdx}
                  className={`relative text-[0.7rem] text-center px-2 py-2 flex items-center justify-center ${
                    isTuesday
                      ? "bg-[#2E3479] text-[0.7rem] rounded-md text-zinc-100 font-semibold"
                      : isSelected
                      ? `bg-[#A1A8D0] text-zinc-100 font-medium ${roundedClass} ${
                          isPrevSelected ? "ml-[-95%]" : ""
                        }`
                      : colIdx === 6
                      ? "text-zinc-400 ml-[-95%]"
                      : "text-[#2E3479]"
                  }`}
                >
                  {time || "–"}
                  {isSelected && (
                    <span className="absolute bottom-1 w-1 h-1 rounded-full bg-white"></span>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
