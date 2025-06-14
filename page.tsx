
import PostCard from '../components/PostCard';

export default function Home() {
  return (
    <main className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Historias del Alma 💬</h1>
      {/* Aquí irán los posts */}
      <PostCard />
    </main>
  );
}
