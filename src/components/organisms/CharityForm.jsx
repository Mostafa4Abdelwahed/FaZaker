"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { useState } from "react";

export default function CharityForm({ onSubmit, loading }) {
  const [number, setNumber] = useState("");
  const [logo, setLogo] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!number || !logo) return alert("Please fill all fields");
    onSubmit({ number, logo });
    setNumber("");
    setLogo(null);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6 items-center">
      <Input
        type="text"
        placeholder="Charity Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="flex-1 rounded-xl"
      />
      <Input
        type="file"
        accept="image/*"
        onChange={(e) => setLogo(e.target.files[0])}
        className="rounded-xl"
      />
      <Button disabled={loading} ActionType="submit">
        {loading ? "Adding..." : "Add"}
      </Button>
    </form>
  );
}