"use client";
import { useEffect, useState } from "react";
import CategoryForm from "../organisms/CategoryForm";
import CategoryTable from "../organisms/CategoryTable";

export default function CategoriesDashboard() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    const res = await fetch("/api/category");
    const data = await res.json();
    setCategories(data.data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    setLoading(true);
    await fetch("/api/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    setName("");
    setLoading(false);
    fetchCategories();
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;

    await fetch(`/api/category/${id}`, {
      method: "DELETE",
    });

    fetchCategories();
  };

  return (
    <div>
      <CategoryForm
        name={name}
        setName={setName}
        loading={loading}
        onSubmit={handleAddCategory}
      />
      <CategoryTable categories={categories} onDelete={handleDelete} />
    </div>
  );
}
