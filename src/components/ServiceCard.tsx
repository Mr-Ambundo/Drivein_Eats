import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
  color: string;
}

function ServiceCard({ title, description, icon, link, color }: ServiceCardProps) {
  return (
    <Link to={link} className="group">
      <div className={`${color} rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}>
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90 mb-4">{description}</p>
        <div className="flex items-center text-white font-semibold group-hover:translate-x-1 transition-transform">
          Get Started
          <span className="ml-2">→</span>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;