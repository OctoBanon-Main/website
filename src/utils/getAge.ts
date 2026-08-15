export const TIMEZONE_COOKIE = 'client-timezone';

export function isValidTimeZone(timeZone: string): boolean {
  try {
    new Intl.DateTimeFormat('en-US', {
      timeZone,
    }).format();

    return true;
  } catch {
    return false;
  }
}

export const calculateAge = (
  birthDate: string,
  timeZone = 'UTC',
): number => {
  const [birthYear, birthMonth, birthDay] = birthDate
    .split('-')
    .map(Number);

  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date());

  const today = Object.fromEntries(
    parts
      .filter((part) => part.type !== 'literal')
      .map((part) => [part.type, Number(part.value)]),
  ) as {
    year: number;
    month: number;
    day: number;
  };

  let age = today.year - birthYear;

  if (
    today.month < birthMonth ||
    (today.month === birthMonth && today.day < birthDay)
  ) {
    age--;
  }

  return age;
};