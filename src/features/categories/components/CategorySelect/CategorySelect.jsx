import { useSelector } from 'react-redux';
import { selectCategories } from '@/features/categories/state/selectors.js';
import { Select } from '@headlessui/react';

const CategorySelect = () => {
  const categories = useSelector(selectCategories);
  return (
    categories.length > 0 && (
      <Select
        name="category"
        aria-label="Transaction category"
        className="block border-b border-none"
      >
        {categories.map(category => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </Select>
    )
  );
};

export default CategorySelect;
