import { div } from "motion/react-client";
import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center">
      <Navbar />
      <h1>Welcome to our E-shop</h1>
    </div>
  );
}
