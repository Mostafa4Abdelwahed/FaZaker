"use client";
import { useState } from "react";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";

export default function SermonForm({ onSubmit, loading }) {
  const [formData, setFormData] = useState({
    text: "",
    sheikh: "",
    voice: null,
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ text: "", sheikh: "", voice: null, video: null });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
      <Input
        type="text"
        placeholder="Sermon text"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="Sheikh name"
        name="sheikh"
        value={formData.sheikh}
        onChange={handleChange}
      />
      <Input
        name="voice"
        accept="audio/*"
        type="file"
        onChange={handleChange}
      />
      <Input
        placeholder="Video URL"
        onChange={handleChange}
      />
      <Button ActionType="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Sermon"}
      </Button>
    </form>
  );
}
