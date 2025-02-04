"use client";

import { ArrowRight, SquareArrowOutUpRightIcon } from "lucide-react";
import React from "react";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  link: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col h-full min-h-[300px]">
      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-52 object-cover"
      />

      {/* Blog Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Blog Date */}
        <span className="text-sm text-gray-500">{blog.date}</span>

        {/* Blog Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mt-1">
          {blog.title}
        </h3>

        {/* Blog Description */}
        <p className="text-gray-700 text-sm sm:text-base mt-2 line-clamp-2">
          {blog.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3 mb-6 h-6">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[#3FA1D8]/10 text-[#3FA1D8] text-xs font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={blog.link}
          className="mt-auto flex items-center gap-2 text-primary font-medium hover:underline"
        >
          <span>Read More</span>
          <SquareArrowOutUpRightIcon size={16} />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
