"use client";
import { useState } from "react";

export default function Dashboard() {
  const [profiles, setProfiles] = useState(["Work", "Personal"]);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold mb-5">DevContexts</h1>
      <div className="grid gap-4">
        {profiles.map((p) => (
          <div key={p} className="p-4 bg-white rounded shadow">
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}
