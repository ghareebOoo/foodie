import Features from "@/components/Features";
import NewArrivals from "@/components/NewArrivals";
import People from "@/components/People";
import Popular from "@/components/Popular";

export default function Home() {
  return (
    <div>
      <NewArrivals />
      <Features />
      <Popular />
      <People />
    </div>
  );
}
