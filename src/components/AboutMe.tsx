import Link from 'next/link';
import { cookies } from 'next/headers';

import {
  calculateAge,
  isValidTimeZone,
  TIMEZONE_COOKIE,
} from '@/utils/getAge';

export default async function AboutMe() {
  const cookieStore = await cookies();

  const rawTimezone = cookieStore.get(TIMEZONE_COOKIE)?.value;

  const timezone =
    rawTimezone && isValidTimeZone(rawTimezone)
      ? rawTimezone
      : 'UTC';

  const age = calculateAge('2006-07-07', timezone);

  return (
    <section>
      <h2 className="font-bold text-sm">About me</h2>

      <p className="text-neutral-300 text-sm">
        Hi! I&apos;m Maksim - a {age}-year-old developer and system
        administrator from{' '}
        <Link href="/yaycha.gif">Russia</Link>. Currently focusing
        on Rust (already comfortable with the basics) and Kotlin
        (actively learning).
      </p>
    </section>
  );
}