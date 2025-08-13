"use client"
import ErrorTemplate from "@/components/templates/Error";

export default function Error({ error, reset }) {
  return <ErrorTemplate error={error} reset={reset} />;
}
