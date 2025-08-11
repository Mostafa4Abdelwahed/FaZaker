import SingleQuranListenTemplate from "@/components/templates/SingleQuranListen"

export default async function SingleQuranListen({ params }) {
  const { id } = await params;
  console.log({ id })
  return <SingleQuranListenTemplate id={id} />
}
