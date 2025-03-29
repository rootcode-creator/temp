import React from 'react';
import Link from 'next/link';

interface Tag {
  id: string;
  name: string;
  slug: string;
}

interface TagsWidgetProps {
  tags: Tag[];
}

const TagsWidget = ({ tags }: TagsWidgetProps) => {
  return (
    <div className="bg-white mb-6">
      <div className="bg-[#1d1419] text-white py-3 px-4">
        <h2 className="text-sm font-medium uppercase">TAGS</h2>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/tag/${tag.slug}`}
              className="inline-block bg-gray-100 hover:bg-green-500 hover:text-white px-3 py-1 text-xs rounded-sm transition-colors"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TagsWidget;
