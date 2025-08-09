"use client";
import Button from "@/components/atoms/Button";

export default function PodcastTableRow({ podcast, onDelete }) {
  return (
    <tr className="border-t border-t-gray-400/20">
      <td className="p-3">{podcast.title}</td>
      <td className="p-3">{podcast.category?.name || "No Category"}</td>
      <td className="p-3">
        <img
          src={podcast.image}
          alt={podcast.title}
          className="w-12 h-12 object-cover rounded"
        />
      </td>
      <td className="p-3">
        <Button onClick={() => onDelete(podcast._id)}>Delete</Button>
      </td>
    </tr>
  );
}
