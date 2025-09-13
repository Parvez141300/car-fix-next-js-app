'use client';
import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData = {
    categories: [
      { id: "general", name: "General Questions" },
      { id: "services", name: "Services & Repairs" },
      { id: "pricing", name: "Pricing & Payments" },
      { id: "appointments", name: "Appointments" },
      { id: "warranty", name: "Warranty & Guarantees" },
    ],
    items: [
      {
        id: 1,
        question: "What are your business hours?",
        answer:
          "Our service center is open Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 4:00 PM. We are closed on Sundays.",
        category: "general",
      },
      {
        id: 2,
        question: "Do I need to make an appointment for service?",
        answer:
          "While walk-ins are welcome, we highly recommend scheduling an appointment to ensure we can accommodate you at your preferred time and minimize waiting.",
        category: "appointments",
      },
      {
        id: 3,
        question: "What types of payment do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, cash, and also offer financing options for major repairs.",
        category: "pricing",
      },
      {
        id: 4,
        question: "Do you offer warranties on your repairs?",
        answer:
          "Yes, we stand behind our work with a 12-month/12,000-mile warranty on most repairs. Please ask your service advisor for specific warranty details on your repair.",
        category: "warranty",
      },
      {
        id: 5,
        question: "How often should I change my oil?",
        answer:
          "We generally recommend changing your oil every 3,000 to 5,000 miles, but this can vary based on your vehicle, oil type, and driving habits. Consult your owner's manual or ask one of our technicians for personalized advice.",
        category: "services",
      },
      {
        id: 6,
        question: "Can you work on all vehicle makes and models?",
        answer:
          "Yes, our certified technicians are trained to work on domestic and import vehicles of all makes and models, from compact cars to trucks and SUVs.",
        category: "services",
      },
      {
        id: 7,
        question: "What should I do if my check engine light comes on?",
        answer:
          "If your check engine light comes on, it's important to have it diagnosed as soon as possible. While it might not indicate an immediate emergency, it could signal a problem that needs attention. You can bring your vehicle to us for a free diagnostic check.",
        category: "services",
      },
      {
        id: 8,
        question: "Do you provide loaner cars or shuttle service?",
        answer:
          "Yes, we offer complimentary shuttle service within a 10-mile radius and have loaner cars available for extended repairs (subject to availability). Please inquire when scheduling your appointment.",
        category: "general",
      },
      {
        id: 9,
        question: "How long will my repair take?",
        answer:
          "Repair times vary depending on the service needed. Simple maintenance like oil changes typically take 30-45 minutes, while more complex repairs may require several hours or days. We'll always provide an estimated completion time before starting work.",
        category: "services",
      },
      {
        id: 10,
        question:
          "Do you use original manufacturer parts (OEM) or aftermarket parts?",
        answer:
          "We can provide both options depending on your preference and budget. We'll always discuss the options with you and make recommendations based on quality, warranty, and value before proceeding with any repairs.",
        category: "pricing",
      },
      {
        id: 11,
        question: "What is included in a standard maintenance service?",
        answer:
          "Our standard maintenance service includes oil change, filter replacement, fluid level checks, tire pressure check and adjustment, visual inspection of brakes, belts, and hoses, and a battery test.",
        category: "services",
      },
      {
        id: 12,
        question: "How can I prepare my car for winter?",
        answer:
          "We recommend a winter preparation service that includes checking your battery, antifreeze levels, tires (consider winter tires if you live in severe climate areas), brakes, heating system, and replacing wiper blades with winter-ready ones.",
        category: "services",
      },
    ],
  };

  const filteredItems = faqData.items.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-11/12 max-w-7xl mx-auto my-10 space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Find answers to common questions about our services, appointments,
          pricing, and more.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center">
        <div className="join w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search FAQs..."
            className="input input-bordered join-item w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-primary join-item">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          className={`btn ${
            activeCategory === "all" ? "btn-primary" : "btn-outline"
          }`}
          onClick={() => setActiveCategory("all")}
        >
          All Questions
        </button>
        {faqData.categories.map((category) => (
          <button
            key={category.id}
            className={`btn ${
              activeCategory === category.id ? "btn-primary" : "btn-outline"
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-md">
              <div
                className="card-body cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="card-title text-lg">{item.question}</h3>
                  <button className="btn btn-ghost btn-sm">
                    {openItems[item.id] ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
                {openItems[item.id] && (
                  <div className="mt-4 text-gray-700">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-700">
              No questions found
            </h3>
            <p className="text-gray-500 mt-2">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Still Have Questions Section */}
      <div className="card bg-primary text-primary-content">
        <div className="card-body text-center">
          <h2 className="card-title justify-center text-2xl">
            Still have questions?
          </h2>
          <p className="max-w-2xl mx-auto">
            Can't find the answer you're looking for? Please reach out to our
            friendly team—we're happy to help!
          </p>
          <div className="card-actions justify-center mt-4">
            <Link href={'/contact'} className="btn btn-secondary">Contact Us</Link>
            <a href="tel:+8801872243808" className="btn btn-outline btn-primary-content">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
