export type QuestionCategory = 
  | 'Critical Path'
  | 'Immigrant Intent'
  | 'Vocational'
  | 'Hostile';

export interface Question {
  id: string;
  category: QuestionCategory;
  text: string;
  expectedOutcome?: string;
  failureTriggers?: string[];
}

export const gauntletQuestions: Question[] = [
  // CRITICAL PATH
  { id: 'c1', category: 'Critical Path', text: 'What are you going to do specifically in the United States?' },
  { id: 'c2', category: 'Critical Path', text: 'Why did you choose this employer over others?' },
  { id: 'c3', category: 'Critical Path', text: 'How will this benefit your career in your home country?' },
  { id: 'c4', category: 'Critical Path', text: 'What will you do if your flight is delayed?' },
  { id: 'c5', category: 'Critical Path', text: 'How much did you pay in total for the visa and program?' },
  { id: 'c6', category: 'Critical Path', text: 'Explain your daily responsibilities in detail.' },
  { id: 'c7', category: 'Critical Path', text: 'What is your plan for the first night in the US?' },
  { id: 'c8', category: 'Critical Path', text: 'How do you plan to handle a workplace emergency?' },
  { id: 'c9', category: 'Critical Path', text: 'Why should I grant you this visa today?' },
  { id: 'c10', category: 'Critical Path', text: 'What is your backup plan if the job falls through?' },
  { id: 'c11', category: 'Critical Path', text: 'Where exactly are you going to stay during your time in the US?' },
  { id: 'c12', category: 'Critical Path', text: 'Who is your sponsor and what is their role?' },

  // IMMIGRANT INTENT
  { id: 'i1', category: 'Immigrant Intent', text: 'Will you apply for another visa after this one expires?', failureTriggers: ['Saying maybe or yes without a clear timeline'] },
  { id: 'i2', category: 'Immigrant Intent', text: 'Do you plan to visit New York City or other tourist attractions instead of working?' },
  { id: 'i3', category: 'Immigrant Intent', text: 'What happens immediately after your program end date?' },
  { id: 'i4', category: 'Immigrant Intent', text: 'Are you returning to finish your thesis? Prove it.' },
  { id: 'i5', category: 'Immigrant Intent', text: 'Do you have family or friends in the United States?' },
  { id: 'i6', category: 'Immigrant Intent', text: 'What would you do if you were offered a permanent job in the US?', failureTriggers: ['Saying they would accept the job'] },
  { id: 'i7', category: 'Immigrant Intent', text: 'Who is paying for your education back home?' },
  { id: 'i8', category: 'Immigrant Intent', text: 'Why are you taking a break from your studies for this program?' },
  { id: 'i9', category: 'Immigrant Intent', text: 'Do you have a significant other? If so, why are you leaving them behind?' },

  // VOCATIONAL
  { id: 'v1', category: 'Vocational', text: 'Explain the Wilberforce rights to me.' },
  { id: 'v2', category: 'Vocational', text: 'How many hours per week on average are you expected to work?' },
  { id: 'v3', category: 'Vocational', text: 'Describe your precise housing arrangement.' },
  { id: 'v4', category: 'Vocational', text: 'Who is your primary emergency contact in the US and back home?' },
  { id: 'v5', category: 'Vocational', text: 'What is the minimum wage in the state where you will be working?' },
  { id: 'v6', category: 'Vocational', text: 'What will you do if your employer asks you to work unpaid overtime?' },
  { id: 'v7', category: 'Vocational', text: 'How will you commute from your housing to your work location?' },
  { id: 'v8', category: 'Vocational', text: 'What are you doing to prepare culturally for the location you are visiting?' },

  // HOSTILE
  { id: 'h1', category: 'Hostile', text: 'I don\'t believe you\'re going back. Every student who comes here stays. Why should I trust you?' },
  { id: 'h2', category: 'Hostile', text: 'Your accent is quite strong. Will you really be able to communicate with American customers?' },
  { id: 'h3', category: 'Hostile', text: 'Your employer is entirely unknown to me. Are you sure it is a real company?' },
  { id: 'h4', category: 'Hostile', text: 'You want to go there? That is a very expensive city, your stated salary isn\'t enough.' },
  { id: 'h5', category: 'Hostile', text: 'You are going to study X, but your job offer is for Y. Isn\'t that a complete contradiction?' },
  { id: 'h6', category: 'Hostile', text: 'I am not convinced you are a real student. You look too old to be in the middle of a degree.' },
  { id: 'h7', category: 'Hostile', text: 'If I just say no right now, what will you do?' }
];

export function getRandomQuestions(count: number = 10): Question[] {
  // Ensure we get a good mix of categories
  const result: Question[] = [];
  
  // Pick at least 3 critical, 2 immigrant intent, 2 vocational, 1 hostile
  // The rest can be random
  const criticals = gauntletQuestions.filter(q => q.category === 'Critical Path').sort(() => 0.5 - Math.random());
  const intents = gauntletQuestions.filter(q => q.category === 'Immigrant Intent').sort(() => 0.5 - Math.random());
  const vocationals = gauntletQuestions.filter(q => q.category === 'Vocational').sort(() => 0.5 - Math.random());
  const hostiles = gauntletQuestions.filter(q => q.category === 'Hostile').sort(() => 0.5 - Math.random());
  
  result.push(...criticals.slice(0, 3));
  result.push(...intents.slice(0, 2));
  result.push(...vocationals.slice(0, 2));
  result.push(...hostiles.slice(0, 2)); // let's give them 2 hostile situations to recover from
  
  // Fill the rest with completely random choices not already included
  const remaining = gauntletQuestions.filter(q => !result.includes(q)).sort(() => 0.5 - Math.random());
  const needed = count - result.length;
  if(needed > 0) {
    result.push(...remaining.slice(0, needed));
  }
  
  return result.sort(() => 0.5 - Math.random()); // shuffle final array
}
