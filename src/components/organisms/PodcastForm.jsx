"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

export default function PodcastForm({
  title,
  setTitle,
  id,
  setId,
  loading,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 mb-6 bg-dark/50 p-4 rounded-xl">
      <Input
        type="text"
        placeholder="Podcast title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Video URL"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Button disabled={loading} ActionType="submit">
        {loading ? "Adding..." : "Add Podcast"}
      </Button>
    </form>
  );
}
