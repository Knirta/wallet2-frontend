import {
  LuBanknote,
  LuGift,
  LuLaptop,
  LuCirclePlus,
  LuShoppingBasket,
  LuCar,
  LuGamepad2,
  LuZap,
  LuHeartPulse,
  LuGraduationCap,
  LuReceipt,
  LuCircleHelp,
  LuHouse,
} from 'react-icons/lu';

const iconMap = {
  salary: LuBanknote,
  gift: LuGift,
  freelance: LuLaptop,
  'other-income': LuCirclePlus,
  groceries: LuShoppingBasket,
  transportation: LuCar,
  entertainment: LuGamepad2,
  utilities: LuZap,
  health: LuHeartPulse,
  education: LuGraduationCap,
  'home-goods': LuHouse,
  'other-expense': LuReceipt,
};

export const getCategoryIcon = categoryName => {
  return iconMap[categoryName] || LuCircleHelp;
};
