"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

export default function PodcastForm({
  title,
  setTitle,
  category,
  setCategory,
  categories,
  video,
  setImage,
  setVideo,
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
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="rounded-xl p-2 bg-dark text-white"
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.name}
          </option>
        ))}
      </select>
      <Input
        type="file"
        placeholder="Image"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <Input
        type="text"
        placeholder="Video URL"
        value={video}
        onChange={(e) => setVideo(e.target.value)}
      />
      <Button disabled={loading} ActionType="submit">
        {loading ? "Adding..." : "Add Podcast"}
      </Button>
    </form>
  );
}
