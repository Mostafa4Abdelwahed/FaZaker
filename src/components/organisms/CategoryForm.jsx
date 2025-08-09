"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";

export default function CategoryForm({ name, setName, loading, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="flex gap-2 mb-6">
      <Input
        type="text"
        placeholder="Category name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-xl flex-1"
      />
      <Button disabled={loading} ActionType="submit">
        {loading ? "Adding..." : "Add"}
      </Button>
    </form>
  );
}
