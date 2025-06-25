import Link from "next/link"
import Container from "../atoms/Container"

function HeaderSection({ title="", href="" }) {
  return (
    <Container className="flex items-center justify-between">
      <h1 className="font-bold text-3xl">{title}</h1>
      <Link className="font-medium text-xl text-main" href={href}>الكل</Link>
    </Container>
  )
}

export default HeaderSection
