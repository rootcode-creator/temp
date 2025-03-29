import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TabSection from '@/components/TabSection';
import CategoryWidget from '@/components/CategoryWidget';
import TagsWidget from '@/components/TagsWidget';
import { posts, categories, tags } from '@/data/mockData';
import { FaCalendarAlt, FaComment } from 'react-icons/fa';

// Generate static params for all posts
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function SinglePostPage({ params }) {
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter((p) => p.id !== post.id && p.categoryId === post.categoryId)
    .slice(0, 3);

  const popularPosts = [...posts].sort((a, b) => b.comments - a.comments).slice(0, 3);
  const recentPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <>
      <Header />

      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="md:col-span-2">
            <article className="bg-white shadow-sm overflow-hidden">
              <div className="relative w-full aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h1 className="text-2xl font-bold mb-3">{post.title}</h1>

                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <span className="flex items-center mr-4">
                    <FaCalendarAlt className="mr-1" size={12} />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center">
                    <FaComment className="mr-1" size={12} />
                    <span>{post.comments}</span>
                  </span>
                </div>

                <div className="prose max-w-none">
                  <p>{post.content}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tagId) => {
                      const tag = tags.find((t) => t.id === tagId);
                      if (!tag) return null;

                      return (
                        <Link
                          key={tag.id}
                          href={`/tag/${tag.slug}`}
                          className="inline-block bg-gray-100 hover:bg-green-500 hover:text-white px-3 py-1 text-xs rounded-sm transition-colors"
                        >
                          {tag.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>

            {relatedPosts.length > 0 && (
              <div className="mt-8">
                <div className="bg-[#1d1419] text-white py-3 px-4 mb-4">
                  <h2 className="text-sm font-medium uppercase">RELATED POSTS</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="bg-white shadow-sm">
                      <Link href={`/post/${relatedPost.slug}`}>
                        <div className="relative aspect-video w-full">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </Link>
                      <div className="p-3">
                        <h3 className="text-sm font-medium line-clamp-2">
                          <Link href={`/post/${relatedPost.slug}`} className="hover:text-green-500">
                            {relatedPost.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div>
            <TabSection
              popularPosts={popularPosts}
              recentPosts={recentPosts}
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
