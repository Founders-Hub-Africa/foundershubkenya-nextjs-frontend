// components/InvestorCard.tsx
type InvestorCardProps = {
  image: string;
  type: string;
  count: number;
};

const InvestorCard = ({ image, type, count }: InvestorCardProps) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg">
      <img
        src={image}
        alt={type}
        className="w-full h-32 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold">{type}</h3>
      <p className="text-gray-600">{count} investors</p>
    </div>
  );
};

export default InvestorCard;
