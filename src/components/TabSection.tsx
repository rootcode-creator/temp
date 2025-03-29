import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaCalendarAlt, FaComment } from 'react-icons/fa';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  comments: number;
  slug: string;
}

interface TabSectionProps {
  popularPosts: Post[];
  recentPosts: Post[];
}

const TabSection = ({ popularPosts, recentPosts }: TabSectionProps) => {
  return (
    <Tabs defaultValue="popular" className="w-full">
      <TabsList className="w-full grid grid-cols-3 h-auto">
        <TabsTrigger value="popular" className="bg-green-500 text-white py-3 rounded-none data-[state=active]:bg-[#1d1419] data-[state=active]:text-white">POPULAR</TabsTrigger>
        <TabsTrigger value="recent" className="bg-[#1d1419] text-white py-3 rounded-none data-[state=active]:bg-[#1d1419] data-[state=active]:text-white">RECENT</TabsTrigger>
        <TabsTrigger value="comments" className="bg-[#1d1419] text-white py-3 rounded-none data-[state=active]:bg-[#1d1419] data-[state=active]:text-white">COMMENTS</TabsTrigger>
      </TabsList>

      <TabsContent value="popular" className="bg-white p-4">
        {popularPosts.map((post) => (
          <div key={post.id} className="flex gap-4 mb-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex-shrink-0">
              <Link href={`/post/${post.slug}`}>
                <div className="relative w-20 h-20">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium leading-tight mb-1">
                <Link href={`/post/${post.slug}`} className="hover:text-green-500">
                  {post.title}
                </Link>
              </h3>
              <div className="flex items-center text-gray-500 text-xs">
                <span className="flex items-center mr-2">
                  <FaCalendarAlt className="mr-1" size={10} />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <FaComment className="mr-1" size={10} />
                  {post.comments}
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </TabsContent>

      <TabsContent value="recent" className="bg-white p-4">
        {recentPosts.map((post) => (
          <div key={post.id} className="flex gap-4 mb-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
            <div className="flex-shrink-0">
              <Link href={`/post/${post.slug}`}>
                <div className="relative w-20 h-20">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium leading-tight mb-1">
                <Link href={`/post/${post.slug}`} className="hover:text-green-500">
                  {post.title}
                </Link>
              </h3>
              <div className="flex items-center text-gray-500 text-xs">
                <span className="flex items-center mr-2">
                  <FaCalendarAlt className="mr-1" size={10} />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <FaComment className="mr-1" size={10} />
                  {post.comments}
                </span>
              </div>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </TabsContent>

      <TabsContent value="comments" className="bg-white p-4">
        <p className="text-sm text-gray-500">No comments yet.</p>
      </TabsContent>
    </Tabs>
  );
};

export default TabSection;
