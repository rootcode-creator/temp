import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaComment } from 'react-icons/fa';

interface PostCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  comments: number;
  slug: string;
}

const PostCard = ({ id, title, excerpt, image, date, comments, slug }: PostCardProps) => {
  return (
    <article className="mb-6 bg-white shadow-sm">
      <Link href={`/post/${slug}`}>
        <div className="relative aspect-video w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">
          <Link href={`/post/${slug}`} className="hover:text-green-500">
            {title}
          </Link>
        </h2>
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Link href={`/post/${slug}`} className="flex items-center mr-4">
            <FaCalendarAlt className="mr-1" size={12} />
            <span>{date}</span>
          </Link>
          <Link href={`/post/${slug}#comment-form`} className="flex items-center">
            <FaComment className="mr-1" size={12} />
            <span>{comments}</span>
          </Link>
        </div>
        <p className="text-gray-700 mb-3 text-sm line-clamp-3">
          {excerpt}
        </p>
      </div>
    </article>
  );
};

export default PostCard;
