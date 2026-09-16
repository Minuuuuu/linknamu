import type { Metadata } from "next";
import Profile from "@/components/Profile";
import LinkCardList from "@/components/LinkCardList";
import AiStudySection from "@/components/AiStudySection";

const profile = {
  name: "이민우",
  bio: "대학생 : 요즘에 AI 개발에 관심이 많아요",
  imageUrl: "https://placehold.co/150x150/orange/white",
};

export const metadata: Metadata = {
  title: `${profile.name} | 링크나무`,
  description: profile.bio,
  openGraph: {
    title: profile.name,
    description: profile.bio,
    images: [{ url: profile.imageUrl }],
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: profile.name,
    description: profile.bio,
    images: [profile.imageUrl],
  },
};

const links = [
  { id: "github", label: "🐙 GitHub", href: "https://github.com/Minuuuuu" },
  { id: "blog", label: "📝 Blog", href: "#" },
  { id: "email", label: "📧 Email", href: "mailto:schoolnick@naver.com" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#fff8f0] via-[#fff1e3] to-[#ffe1c8] px-6 py-16 dark:from-[#221a15] dark:via-[#291f18] dark:to-[#2b1f17]">
      <main className="flex w-full max-w-sm flex-col items-center gap-12">
        <Profile name={profile.name} bio={profile.bio} imageUrl={profile.imageUrl} />
        <LinkCardList links={links} />
        <AiStudySection />
      </main>
    </div>
  );
}
