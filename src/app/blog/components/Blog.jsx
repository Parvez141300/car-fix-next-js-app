'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaCalendar,
  FaUser,
  FaTags,
  FaArrowRight,
  FaSearch,
  FaComments,
  FaShare,
} from "react-icons/fa";

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Sample blog data - replace with actual data from your CMS or API
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Car Maintenance Tips Every Owner Should Know",
      excerpt:
        "Regular maintenance is key to keeping your car running smoothly and avoiding costly repairs down the road.",
      image: "/blog/car-maintenance.jpg",
      date: "2023-10-15",
      author: "Michael Johnson",
      categories: ["Maintenance", "Tips"],
      readTime: "5 min read",
      comments: 12,
    },
    {
      id: 2,
      title: "How to Identify and Fix Common Brake Problems",
      excerpt:
        "Learn to recognize the signs of brake wear and understand when it's time for replacement or repair.",
      image: "/blog/brake-repair.jpg",
      date: "2023-10-08",
      author: "Sarah Williams",
      categories: ["Repair", "Safety"],
      readTime: "7 min read",
      comments: 8,
    },
    {
      id: 3,
      title: "The Future of Electric Vehicles: What Car Owners Need to Know",
      excerpt:
        "As electric vehicles become more common, understanding their maintenance needs is crucial for owners.",
      image: "/blog/electric-vehicles.jpg",
      date: "2023-09-28",
      author: "David Chen",
      categories: ["EV", "Technology"],
      readTime: "10 min read",
      comments: 15,
    },
    {
      id: 4,
      title: "Seasonal Car Care: Preparing Your Vehicle for Winter",
      excerpt:
        "Get your car ready for the colder months with these essential winter preparation tips.",
      image: "/blog/winter-prep.jpg",
      date: "2023-09-15",
      author: "Emily Rodriguez",
      categories: ["Seasonal", "Maintenance"],
      readTime: "6 min read",
      comments: 5,
    },
    {
      id: 5,
      title: "Understanding Your Car's Warning Lights",
      excerpt:
        "A guide to deciphering what those dashboard warning lights mean and how to respond to them.",
      image: "/blog/warning-lights.jpg",
      date: "2023-09-05",
      author: "James Wilson",
      categories: ["Tips", "Safety"],
      readTime: "8 min read",
      comments: 20,
    },
    {
      id: 6,
      title: "The Benefits of Regular Oil Changes",
      excerpt:
        "Discover why regular oil changes are one of the most important maintenance tasks for your vehicle.",
      image: "/blog/oil-change.jpg",
      date: "2023-08-22",
      author: "Lisa Thompson",
      categories: ["Maintenance"],
      readTime: "4 min read",
      comments: 7,
    },
  ];

  const categories = [
    "All",
    "Maintenance",
    "Repair",
    "EV",
    "Tips",
    "Safety",
    "Technology",
    "Seasonal",
  ];
  const popularPosts = blogPosts.slice(0, 3);
  const allCategories = [
    ...new Set(blogPosts.flatMap((post) => post.categories)),
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.categories.includes(activeCategory);
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-11/12 max-w-7xl mx-auto my-10 space-y-8">
      {/* Blog Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">CarFix Blog</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Expert tips, industry insights, and the latest news on car
          maintenance, repair, and automotive technology.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            <div className="join w-full md:w-auto">
              <input
                type="text"
                placeholder="Search articles..."
                className="input input-bordered join-item w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-primary join-item">
                <FaSearch />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`btn btn-sm ${
                    activeCategory === category ? "btn-primary" : "btn-outline"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <figure className="h-48 relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {post.categories.map((category) => (
                      <span
                        key={category}
                        className="badge badge-outline badge-primary"
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <h2 className="card-title hover:text-primary transition-colors duration-200">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>

                  <p className="text-gray-600">{post.excerpt}</p>

                  <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FaUser className="text-primary" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendar className="text-primary" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="card-actions justify-between items-center mt-4">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500">
                        {post.readTime}
                      </span>
                      <div className="flex items-center gap-1">
                        <FaComments className="text-gray-500" />
                        <span className="text-sm text-gray-500">
                          {post.comments}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="btn btn-ghost btn-sm"
                    >
                      Read More <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-8">
              <div className="join">
                <button className="join-item btn btn-disabled">«</button>
                <button className="join-item btn btn-primary">1</button>
                <button className="join-item btn">2</button>
                <button className="join-item btn">3</button>
                <button className="join-item btn">»</button>
              </div>
            </div>
          )}

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700">
                No articles found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* About Blog */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">About Our Blog</h3>
              <p className="text-gray-600">
                Welcome to the CarFix blog, where our team of certified
                technicians shares their expertise to help you keep your vehicle
                in top condition.
              </p>
            </div>
          </div>

          {/* Popular Posts */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Popular Posts</h3>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="flex gap-3 group"
                  >
                    <div className="w-16 h-16 relative rounded overflow-hidden flex-shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="card bg-base-100 shadow-md">
            <div className="card-body">
              <h3 className="card-title">Categories</h3>
              <div className="space-y-2">
                {allCategories.map((category) => (
                  <button
                    key={category}
                    className={`block w-full text-left p-2 rounded-lg transition-colors duration-200 ${
                      activeCategory === category
                        ? "bg-primary text-primary-content"
                        : "hover:bg-base-200"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category}</span>
                      <span className="badge badge-primary">
                        {
                          blogPosts.filter((post) =>
                            post.categories.includes(category)
                          ).length
                        }
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="card bg-primary text-primary-content shadow-md">
            <div className="card-body">
              <h3 className="card-title">Subscribe to Our Newsletter</h3>
              <p className="text-primary-content/80">
                Get the latest car maintenance tips and exclusive offers
                directly to your inbox.
              </p>
              <div className="form-control mt-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered"
                />
                <button className="btn btn-secondary mt-2">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
