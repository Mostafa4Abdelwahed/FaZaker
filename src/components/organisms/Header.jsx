export default function Header({ title }) {
  return (
    <header className="bg-white shadow px-6 py-4">
      <h1 className="text-2xl font-bold">{title}</h1>
    </header>
  );
}
