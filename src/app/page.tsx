import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import TabSection from "@/components/TabSection";
import CategoryWidget from "@/components/CategoryWidget";
import TagsWidget from "@/components/TagsWidget";
import { posts, categories, tags } from "@/data/mockData";

export default function Home() {
  const recentPosts = [...posts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  const popularPosts = [...posts].sort((a, b) => b.comments - a.comments);

  return (
    <>
      <Header />

      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="md:col-span-2">
            <div className="bg-[#1d1419] text-white py-3 px-4 mb-4">
              <h2 className="text-sm font-medium uppercase">RECENT POSTS</h2>
            </div>

            {recentPosts.map((post) => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
                date={post.date}
                comments={post.comments}
                slug={post.slug}
              />
            ))}
          </div>

          {/* Sidebar Column */}
          <div>
            <TabSection
              popularPosts={popularPosts.slice(0, 3)}
              recentPosts={recentPosts.slice(0, 3)}
            />

            <div className="mt-6 mb-6 bg-green-500 text-white py-4 px-4 text-center">
              <h3 className="text-sm uppercase mb-2">JOIN WITH ME</h3>
              <p className="text-xs">Follow for the latest technology updates and tips!</p>
            </div>

            <CategoryWidget categories={categories} />
            <TagsWidget tags={tags} />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
