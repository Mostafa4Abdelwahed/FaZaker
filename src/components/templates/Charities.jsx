"use client";
import { useEffect, useState } from "react";
import CharityForm from "@/components/organisms/CharityForm";
import CharityTable from "@/components/organisms/CharityTable";

export default function CharityDashboard() {
  const [charities, setCharities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCharities = async () => {
    const res = await fetch("/api/charity");
    const data = await res.json();
    setCharities(data.data);
  };

  useEffect(() => {
    fetchCharities();
  }, []);

  const handleAddCharity = async ({ number, logo }) => {
    const formData = new FormData();
    formData.append("number", number);
    formData.append("logo", logo);

    setLoading(true);
    await fetch("/api/charity", {
      method: "POST",
      body: formData,
    });
    setLoading(false);
    fetchCharities();
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;

    await fetch(`/api/charity/${id}`, {
      method: "DELETE",
    });

    fetchCharities();
  };

  return (
    <div>
      <CharityForm onSubmit={handleAddCharity} loading={loading} />
      <CharityTable charities={charities} onDelete={handleDelete} />
    </div>
  );
}