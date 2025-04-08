
import React from 'react';
import { CalculatorItem } from '../calculatorTypes';
import { GraduationCap, BookOpen, Calculator, Pencil, FileEdit, BarChart4, PenTool, FlaskConical } from 'lucide-react';

// Education Calculators
export const educationCalculators: CalculatorItem[] = [
  {
    title: 'College GPA Calculator',
    description: 'Calculate your college Grade Point Average (GPA) based on course credits and grades.',
    icon: <GraduationCap size={24} />,
    to: '/college-gpa-calculator'
  },
  {
    title: 'Percentage to CGPA Calculator',
    description: 'Convert percentage marks to Cumulative Grade Point Average (CGPA) and vice versa.',
    icon: <Calculator size={24} />,
    to: '/percentage-to-cgpa-calculator'
  },
  {
    title: 'AP Lang Score Calculator',
    description: 'Estimate your AP English Language and Composition score based on multiple-choice and free-response sections.',
    icon: <PenTool size={24} />,
    to: '/ap-lang-score-calculator'
  },
  {
    title: 'Final Grade Calculator',
    description: 'Calculate what score you need on your final exam to achieve your desired course grade.',
    icon: <FileEdit size={24} />,
    to: '/final-grade-calculator'
  },
  {
    title: 'Snow Day Calculator',
    description: 'Predict the likelihood of a snow day based on weather conditions and school factors.',
    icon: <BarChart4 size={24} />,
    to: '/snow-day-calculator'
  },
  {
    title: 'Peptide Calculator',
    description: 'Calculate molecular weight, extinction coefficient, and other properties of peptides based on amino acid sequence.',
    icon: <FlaskConical size={24} />,
    to: '/peptide-calculator'
  }
];
