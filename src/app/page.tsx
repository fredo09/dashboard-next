import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirecciona a una page en concreto
  redirect("/dashboard/counter");
}
