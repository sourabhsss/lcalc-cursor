import React from 'react';
import { Container } from '@/components/ui/container';
import CalculatorDisclaimer from './CalculatorDisclaimer';

interface CalculatorLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  category?: string;
  categoryUrl?: string;
  metaDescription?: string;
  canonicalUrl?: string;
}

const CalculatorLayout: React.FC<CalculatorLayoutProps> = ({
  children,
  title,
  description,
  category,
  categoryUrl,
  metaDescription,
  canonicalUrl
}) => {
  return (
    <Container className="py-8">
      <div className="max-w-4xl mx-auto">
        {category && categoryUrl && (
          <div className="text-sm text-muted-foreground mb-4">
            <a href={categoryUrl} className="hover:underline">{category}</a>
          </div>
        )}
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        {description && (
          <p className="text-muted-foreground mb-8">{description}</p>
        )}
        {children}
        
        {/* Calculator Disclaimer */}
        <CalculatorDisclaimer />
      </div>
    </Container>
  );
};

export default CalculatorLayout;
