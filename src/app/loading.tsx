export default function Loading() {
  return (
    <div className="pt-24 min-h-screen flex flex-col items-center justify-center px-4">
      <div className="w-16 h-16 border-4 border-primary/10 border-t-primary rounded-full animate-spin mb-6" />
      <div className="space-y-3 text-center">
        <div className="h-6 w-48 bg-primary/5 rounded-full animate-pulse" />
        <div className="h-4 w-32 bg-primary/5 rounded-full animate-pulse mx-auto" />
      </div>
    </div>
  );
}
