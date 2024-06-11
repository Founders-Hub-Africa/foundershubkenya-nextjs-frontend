// components/CategoryTitle.tsx
type CategoryTitleProps = {
  title: string;
};

const CategoryTitle = ({ title }: CategoryTitleProps) => {
  return <h2 className="text-xl font-bold my-4">{title}</h2>;
};

export default CategoryTitle;
