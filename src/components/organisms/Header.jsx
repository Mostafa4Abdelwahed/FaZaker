export default function Header({ title }) {
  return (
    <header className="bg-dark shadow px-6 py-4">
      <h1 className="text-2xl text-main font-bold">{title}</h1>
    </header>
  );
}
