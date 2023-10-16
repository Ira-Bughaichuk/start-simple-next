import Link from "next/link";

export default function VideoLayout({ children }) {
  return (
    <>
      <h1>Video</h1>

      <nav>
        <Link href="/video/all">All |</Link>
        <Link href="/video/fav"> Fav</Link>
      </nav>
      {children}
    </>
  );
}
