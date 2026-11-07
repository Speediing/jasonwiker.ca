export type Kind = 'project' | 'writing';

export function kindLabel(kind: Kind): string {
  switch (kind) {
    case 'project':
      return 'Project';
    case 'writing':
      return 'Writing';
    default: {
      const unexpected: never = kind;
      return unexpected;
    }
  }
}

export function formatDate(iso: string): string {
  const [yearText, monthText, dayText] = iso.split('-');
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const name = months[month - 1];
  if (!year || !name || !day) return iso;
  return `${day} ${name} ${year}`;
}
