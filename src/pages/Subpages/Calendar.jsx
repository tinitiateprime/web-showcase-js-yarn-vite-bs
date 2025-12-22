import { useMemo, useState } from "react";
import dayjs from "dayjs";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarPage() {
  const [current, setCurrent] = useState(dayjs()); // today

  // Events state (instead of fixed object)
  const [events, setEvents] = useState({
    "2025-08-21": [
      { type: "birthday", title: "🎂 John's Birthday" },
      { type: "meeting", title: "📅 Project Meeting" },
    ],
    "2025-08-25": [{ type: "meeting", title: "🤝 Client Call" }],
  });

  // Form state
  const [newDate, setNewDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [newType, setNewType] = useState("birthday");
  const [newTitle, setNewTitle] = useState("");

  // Handle add event
  const addEvent = () => {
    if (!newTitle.trim()) return;
    setEvents((prev) => {
      const updated = { ...prev };
      if (!updated[newDate]) updated[newDate] = [];
      updated[newDate].push({ type: newType, title: newTitle });
      return updated;
    });
    setNewTitle(""); // clear input
  };

  const monthStart = useMemo(() => current.startOf("month"), [current]);
  const days = useMemo(() => {
    const start = monthStart.subtract(monthStart.day(), "day"); // Sunday-start
    return Array.from({ length: 42 }, (_, i) => start.add(i, "day")); // 6 weeks grid
  }, [monthStart]);

  const isToday = (d) => d.isSame(dayjs(), "day");
  const isCurrentMonth = (d) => d.month() === current.month();

  return (
    <div className="container">
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between my-3">
        <div className="d-flex gap-2">
          <button
            className="btn btn-outline-secondary"
            onClick={() => setCurrent(current.subtract(1, "month"))}
          >
            ‹ Prev
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setCurrent(current.add(1, "month"))}
          >
            Next ›
          </button>
          <button className="btn btn-primary" onClick={() => setCurrent(dayjs())}>
            Today
          </button>
        </div>
        <h4 className="m-0">{current.format("MMMM YYYY")}</h4>
      </div>

      {/* Add Event Form */}
      <div className="card p-3 mb-4">
        <div className="row g-2">
          <div className="col-md-3">
            <input
              type="date"
              className="form-control"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <select
              className="form-select"
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
            >
              <option value="birthday">Birthday</option>
              <option value="meeting">Meeting</option>
            </select>
          </div>
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Event title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-success w-100" onClick={addEvent}>
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Box */}
      <div className="border rounded overflow-hidden">
        {/* Weekday header */}
        <div className="row g-0 bg-light text-center fw-bold">
          {WEEKDAYS.map((wd) => (
            <div key={wd} className="col border p-2">
              {wd}
            </div>
          ))}
        </div>

        {/* Days */}
        <div className="row g-0 text-center">
          {days.map((d) => {
            const muted = !isCurrentMonth(d);
            const today = isToday(d);
            const dateKey = d.format("YYYY-MM-DD");
            const dayEvents = events[dateKey] || [];

            return (
              <div
                key={dateKey}
                className="col border p-2 text-start"
                style={{ minHeight: "120px" }}
              >
                {/* Date Number */}
                <div
                  className={`d-flex justify-content-end ${
                    muted ? "text-muted" : ""
                  }`}
                >
                  <span
                    className={`badge ${
                      today ? "bg-primary" : "bg-secondary-subtle text-dark"
                    }`}
                  >
                    {d.date()}
                  </span>
                </div>

                {/* Events List */}
                <div className="mt-2 small">
                  {dayEvents.map((ev, i) => (
                    <div
                      key={i}
                      className={`badge d-block text-start mb-1 ${
                        ev.type === "birthday"
                          ? "bg-warning text-dark"
                          : "bg-info text-dark"
                      }`}
                    >
                      {ev.title}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
