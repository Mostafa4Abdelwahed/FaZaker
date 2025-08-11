import SingleQuranReadTemplate from "@/components/templates/SingleQuranRead"

export default async function SingleQuranRead({ params }) {
  const { id } = await params;
  console.log({ id })
  return <SingleQuranReadTemplate id={id} />
}
