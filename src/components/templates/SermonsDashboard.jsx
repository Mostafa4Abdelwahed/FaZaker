"use client";
import { useState, useEffect } from "react";
import SermonForm from "@/components/organisms/SermonForm";
import SermonTable from "@/components/organisms/SermonTable";

export default function SermonsDashboard() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSermons = async () => {
    const res = await fetch("/api/sermon");
    const data = await res.json();
    setSermons(data.data);
  };

  useEffect(() => {
    fetchSermons();
  }, []);

  const handleAddSermon = async (formData) => {
    setLoading(true);

    const body = new FormData();
    body.append("text", formData.text);
    body.append("sheikh", formData.sheikh);
    body.append("voice", formData.voice);
    body.append("video", formData.video);

    await fetch("/api/sermon", {
      method: "POST",
      body,
    });

    setLoading(false);
    fetchSermons();
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;

    await fetch(`/api/sermon/${id}`, { method: "DELETE" });
    fetchSermons();
  };

  return (
    <div>
      <SermonForm onSubmit={handleAddSermon} loading={loading} />
      <SermonTable sermons={sermons} onDelete={handleDelete} />
    </div>
  );
}