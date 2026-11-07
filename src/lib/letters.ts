export type Letter = 'idea' | 'opportunity' | 'work';

export const emptyLetter = 'No letter started.';

export function isLetter(value: string): value is Letter {
  return value === 'idea' || value === 'opportunity' || value === 'work';
}

export function letterSubject(letter: Letter): string {
  switch (letter) {
    case 'idea':
      return 'An idea to build';
    case 'opportunity':
      return 'Another opportunity';
    case 'work':
      return 'A question about the work';
    default: {
      const unexpected: never = letter;
      return unexpected;
    }
  }
}

export function letterStatus(letter: Letter): string {
  switch (letter) {
    case 'idea':
      return 'A letter about an idea to build.';
    case 'opportunity':
      return 'A letter about another opportunity.';
    case 'work':
      return 'A letter about the work.';
    default: {
      const unexpected: never = letter;
      return unexpected;
    }
  }
}
