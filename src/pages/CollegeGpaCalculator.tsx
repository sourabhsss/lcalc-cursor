
import React from 'react';
import CalculatorLayout from '@/components/CalculatorLayout';
import CollegeGpaCalculator from '@/calculators/collegeGpa/CollegeGpaCalculator';

const CollegeGpaCalculatorPage: React.FC = () => {
  return (
    <CalculatorLayout
      title="College GPA Calculator"
      description="Calculate your college Grade Point Average (GPA) for a single semester or your cumulative GPA across multiple terms."
      category="Education"
      metaDescription="Free College GPA Calculator to determine your Grade Point Average. Supports both semester and cumulative GPA calculations with detailed academic standing information."
      canonicalUrl="https://lcalculator.com/college-gpa-calculator"
    >
      <div className="py-12">
        <CollegeGpaCalculator />
      </div>
    </CalculatorLayout>
  );
};

export default CollegeGpaCalculatorPage;
