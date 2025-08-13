import SingleQuranTafsirTemplate from "@/components/templates/SingleQuranTafsir";

export default async function SingleQuranTafsir({ params }) {
  const { id } = await params;
  return <SingleQuranTafsirTemplate id={id} />;
}
