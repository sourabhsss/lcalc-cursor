import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import APLang from '@/calculators/APLang';

const APLangCalculator: React.FC = () => {
  return (
    <CalculatorLayout
      title="AP Lang Score Calculator"
      description="Estimate your AP English Language and Composition score based on multiple-choice and free-response performance."
      category="Academic"
      metaDescription="Use our free AP Lang Score Calculator to estimate your score on the AP English Language and Composition exam. Convert multiple-choice and essay scores to the 1-5 scale."
    >
      <div className="py-12">
        <APLang />
      </div>
    </CalculatorLayout>
  );
};

export default APLangCalculator;
