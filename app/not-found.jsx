// app/not-found.jsx
import Image from "@node_modules/next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <Image
        src="/assets/images/custom-404.png"
        alt="404"
        width={500}
        height={500}
        loading="lazy"
      />
    </div>
  );
}
