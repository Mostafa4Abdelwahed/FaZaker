"use client";
import { useEffect, useState } from "react";
import PodcastForm from "@/components/organisms/PodcastForm";
import PodcastTable from "@/components/organisms/PodcastTable";

export default function PodcastsDashboard() {
  const [podcasts, setPodcasts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPodcasts = async () => {
    const res = await fetch("/api/podcast");
    const data = await res.json();
    setPodcasts(data.data);
  };

  const fetchCategories = async () => {
    const res = await fetch("/api/category");
    const data = await res.json();
    setCategories(data.data);
  };

  useEffect(() => {
    fetchPodcasts();
    fetchCategories();
  }, []);

  const handleAddPodcast = async (e) => {
    e.preventDefault();
    if (!title.trim() || !category.trim()) return;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("video", video);

    setLoading(true);
    await fetch("/api/podcast", {
      method: "POST",
      body: formData,
    });

    setTitle("");
    setCategory("");
    setImage("");
    setVideo("");
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
        category={category}
        setCategory={setCategory}
        categories={categories}
        image={image}
        video={video}
        setImage={setImage}
        setVideo={setVideo}
        loading={loading}
        onSubmit={handleAddPodcast}
      />
      <PodcastTable podcasts={podcasts} onDelete={handleDelete} />
    </div>
  );
}
