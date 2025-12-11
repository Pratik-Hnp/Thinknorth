import { Suspense } from "react";
import ServicesClient from "@/components/ServicesClient";

export default function Services() {
  return (
    <Suspense fallback={<div className="min-h-screen grid place-items-center">Loading...</div>}>
      <ServicesClient />
    </Suspense>
  );
}
