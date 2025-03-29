import React from 'react';
import Link from 'next/link';

interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}

interface CategoryWidgetProps {
  categories: Category[];
}

const CategoryWidget = ({ categories }: CategoryWidgetProps) => {
  return (
    <div className="bg-white mb-6">
      <div className="bg-[#1d1419] text-white py-3 px-4">
        <h2 className="text-sm font-medium uppercase">CATEGORIES</h2>
      </div>
      <div className="p-4">
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0">
              <Link
                href={`/category/${category.slug}`}
                className="text-[#1d1419] hover:text-green-500 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 text-green-500"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
                {category.name}
              </Link>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                ({category.count})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryWidget;
