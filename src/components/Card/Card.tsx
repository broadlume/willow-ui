import './Card.scss';

type CardProps = {
  title: string;
  description: string;
};

export const Card = ({ title, description }: CardProps) => {
  return (
    <div className='yeee rounded-lg shadow-lg overflow-hidden'>
      <div className='px-6 py-4'>
        <h2 className='font-bold text-xl mb-2'>{title}</h2>
        <p className='text-gray-700 text-base'>{description}</p>
      </div>
    </div>
  );
};
