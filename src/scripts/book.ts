import { emptyLetter, isLetter, letterStatus, letterSubject } from '../lib/letters';

const email = 'jason.wiker@ucalgary.ca';

type FilterKind = 'all' | 'project' | 'writing';

function isFilterKind(value: string): value is FilterKind {
  switch (value) {
    case 'all':
    case 'project':
    case 'writing':
      return true;
    default:
      return false;
  }
}

function countLabel(shown: number): string {
  if (shown === 0) return 'Nothing in the index matches.';
  if (shown === 1) return '1 entry.';
  return `${shown} entries.`;
}

function setupIndex(): void {
  const root = document.querySelector('[data-index]');
  if (!(root instanceof HTMLElement)) return;

  const buttons = [...root.querySelectorAll<HTMLButtonElement>('[data-kind]')];
  const input = root.querySelector('[data-find]');
  const items = [...root.querySelectorAll<HTMLElement>('[data-entry]')];
  const status = root.querySelector('[data-status]');
  const blank = root.querySelector('[data-blank]');
  if (!(input instanceof HTMLInputElement) || !(status instanceof HTMLElement)) return;
  if (!(blank instanceof HTMLElement)) return;

  let kind: FilterKind = 'all';

  const render = (): void => {
    const query = input.value.trim().toLowerCase();
    let shown = 0;
    for (const item of items) {
      const itemKind = item.dataset.entryKind ?? '';
      const hay = item.dataset.hay ?? '';
      const kindOk = kind === 'all' || itemKind === kind;
      const queryOk = query.length === 0 || hay.includes(query);
      const visible = kindOk && queryOk;
      item.hidden = !visible;
      if (visible) shown += 1;
    }
    const empty = shown === 0;
    blank.hidden = !empty;
    status.textContent = countLabel(shown);
  };

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const next = button.dataset.kind ?? '';
      if (!isFilterKind(next)) return;
      kind = next;
      for (const other of buttons) {
        other.setAttribute('aria-pressed', other === button ? 'true' : 'false');
      }
      render();
    });
  }

  input.addEventListener('input', render);
}

function mailHref(subject: string | null): string {
  if (!subject) return `mailto:${email}`;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

function setupContact(): void {
  const root = document.querySelector('[data-contact]');
  if (!(root instanceof HTMLElement)) return;

  const status = root.querySelector('[data-letter-status]');
  const mail = root.querySelector('[data-mail]');
  const address = root.querySelector('[data-address]');
  const copyButton = root.querySelector('[data-copy]');
  const copyStatus = root.querySelector('[data-copy-status]');
  if (!(status instanceof HTMLElement) || !(mail instanceof HTMLAnchorElement)) return;
  if (!(address instanceof HTMLAnchorElement) || !(copyButton instanceof HTMLButtonElement)) return;
  if (!(copyStatus instanceof HTMLElement)) return;

  const radios = [...root.querySelectorAll<HTMLInputElement>('input[name="letter"]')];

  const apply = (subject: string | null, message: string): void => {
    const href = mailHref(subject);
    mail.href = href;
    address.href = href;
    status.textContent = message;
  };

  apply(null, emptyLetter);

  for (const radio of radios) {
    radio.addEventListener('change', () => {
      if (!radio.checked || !isLetter(radio.value)) return;
      apply(letterSubject(radio.value), letterStatus(radio.value));
    });
  }

  copyButton.addEventListener('click', () => {
    const write = async (): Promise<void> => {
      try {
        await navigator.clipboard.writeText(email);
        copyStatus.textContent = 'Copied.';
      } catch {
        copyStatus.textContent = 'Could not copy. The address is above.';
      }
    };
    void write();
  });
}

setupIndex();
setupContact();
