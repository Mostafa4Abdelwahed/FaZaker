"use client";
import { useEffect, useState } from "react";
import PodcastForm from "@/components/organisms/PodcastForm";
import PodcastTable from "@/components/organisms/PodcastTable";

export default function PodcastsDashboard() {
  const [podcasts, setPodcasts] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPodcasts = async () => {
    const res = await fetch("/api/podcast");
    const data = await res.json();
    setPodcasts(data.data);
  };

  useEffect(() => {
    fetchPodcasts();
  }, []);

  const handleAddPodcast = async (e) => {
    e.preventDefault();
    if (!title.trim() || !id.trim()) return;
    const formData = new FormData();
    formData.append("title", title);
    formData.append("id", id);

    setLoading(true);
    await fetch("/api/podcast", {
      method: "POST",
      body: formData,
    });

    setTitle("");
    setId("");
    setLoading(false);
    fetchPodcasts();
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;

    await fetch(`/api/podcast/${id}`, {
      method: "DELETE",
    });

    fetchPodcasts();
  };

  return (
    <div>
      <PodcastForm
        title={title}
        setTitle={setTitle}
        id={id}
        setId={setId}
        loading={loading}
        onSubmit={handleAddPodcast}
      />
      <PodcastTable podcasts={podcasts} onDelete={handleDelete} />
    </div>
  );
}
