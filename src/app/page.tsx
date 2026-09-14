import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";

const profile = {
  name: "이민우",
  bio: "대학생 : 요즘에 AI 개발에 관심이 많아요",
  imageUrl: "https://placehold.co/150x150/orange/white",
};

const links = [
  { label: "🐙 GitHub", href: "https://github.com/Minuuuuu" },
  { label: "📝 Blog", href: "#" },
  { label: "📧 Email", href: "mailto:schoolnick@naver.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#fff8f0] via-[#fff1e3] to-[#ffe1c8] px-6 py-16 dark:from-[#221a15] dark:via-[#291f18] dark:to-[#2b1f17]">
      <main className="flex w-full max-w-sm flex-col items-center gap-12">
        <Profile name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </main>
    </div>
  );
}
