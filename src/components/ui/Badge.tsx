import React from 'react';

type BadgeVariant = 'gold' | 'silver' | 'bronze' | 'platinum' | 'organic' | 'bestseller' | 'new';

interface BadgeProps {
  variant: BadgeVariant;
  text: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ variant, text, className = '' }) => {
  const variantClasses = {
    gold: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white',
    silver: 'bg-gradient-to-r from-gray-300 to-gray-400 text-gray-800',
    bronze: 'bg-gradient-to-r from-amber-600 to-amber-800 text-white',
    platinum: 'bg-gradient-to-r from-slate-200 to-slate-400 text-slate-900',
    organic: 'bg-green-600 text-white',
    bestseller: 'bg-red-600 text-white',
    new: 'bg-blue-600 text-white',
  };

  return (
    <span
      className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {text}
    </span>
  );
};

export default Badge;
