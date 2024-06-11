// pages/index.tsx
import CategoryTitle from "@/components/dashboard/investors/category-title";
import InvestorCard from "@/components/dashboard/investors/investor-card";
import Header from "@/components/dashboard/layout/header-no-search";

const investorsData = [
  {
    category: "Local Investors",
    investors: [
      { image: "/images/angel.jpg", type: "Angel Investors", count: 205 },
      { image: "/images/venture.jpg", type: "Venture Capitalists", count: 57 },
      { image: "/images/grant.jpg", type: "Grant Investors", count: 120 },
      { image: "/images/debt.jpg", type: "Debt Investors", count: 42 },
      { image: "/images/crowd.jpg", type: "Crowd Investment", count: 2 },
    ],
  },
  {
    category: "East African Investors",
    investors: [
      { image: "/images/angel.jpg", type: "Angel Investors", count: 205 },
      { image: "/images/venture.jpg", type: "Venture Capitalists", count: 57 },
      { image: "/images/grant.jpg", type: "Grant Investors", count: 120 },
      { image: "/images/debt.jpg", type: "Debt Investors", count: 42 },
      { image: "/images/crowd.jpg", type: "Crowd Investment", count: 2 },
    ],
  },
  {
    category: "Pan African Investors",
    investors: [
      { image: "/images/angel.jpg", type: "Angel Investors", count: 205 },
      { image: "/images/venture.jpg", type: "Venture Capitalists", count: 57 },
      { image: "/images/grant.jpg", type: "Grant Investors", count: 120 },
      { image: "/images/debt.jpg", type: "Debt Investors", count: 42 },
      { image: "/images/crowd.jpg", type: "Crowd Investment", count: 2 },
    ],
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header title="Investors List" />
      <div className="p-4">
        {investorsData.map((category) => (
          <div key={category.category}>
            <CategoryTitle title={category.category} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.investors.map((investor) => (
                <InvestorCard
                  key={investor.type}
                  image={investor.image}
                  type={investor.type}
                  count={investor.count}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
