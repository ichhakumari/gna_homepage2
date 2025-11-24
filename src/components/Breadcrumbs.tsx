import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items = [] }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-blue-600 transition-colors">
        Home
      </Link>
      {items.map((item, index) =>
      <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {item.href && index < items.length - 1 ?
        <Link to={item.href} className="hover:text-blue-600 transition-colors">
              {item.label}
            </Link> :

        <span className="text-gray-800 font-medium">{item.label}</span>
        }
        </div>
      )}
    </nav>);

};

export default Breadcrumbs;