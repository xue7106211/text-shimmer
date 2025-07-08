import { TextShimmer } from "../components/ui/text-shimmer";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <TextShimmer className="text-xl">
          How heavy the days are, There&apos;s not a fire that can warm me...
        </TextShimmer>
      </main>
    </div>
  );
}
