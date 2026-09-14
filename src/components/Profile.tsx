type ProfileProps = {
  name: string;
  bio: string;
  imageUrl?: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="rounded-full bg-gradient-to-br from-orange-200 via-amber-100 to-orange-300 p-1 shadow-[0_12px_30px_-8px_rgba(180,90,40,0.4)] dark:from-orange-900/40 dark:via-amber-800/30 dark:to-orange-900/40">
        <div className="h-28 w-28 overflow-hidden rounded-full ring-4 ring-white bg-zinc-100 dark:ring-[#241c17] dark:bg-zinc-800">
          {imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm text-zinc-400">
              사진
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center gap-1.5 text-center">
        <h1 className="text-xl font-bold tracking-tight text-stone-800 dark:text-stone-50">
          {name}
        </h1>
        <p className="text-sm text-stone-500 dark:text-stone-300">{bio}</p>
      </div>
    </div>
  );
}
