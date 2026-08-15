'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { TIMEZONE_COOKIE } from '@/utils/getAge';

export function TimezoneSync() {
  const router = useRouter();

  useEffect(() => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (!timezone) {
      return;
    }

    const current = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${TIMEZONE_COOKIE}=`))
      ?.split('=')[1];

    const decodedCurrent = current
      ? decodeURIComponent(current)
      : undefined;

    if (decodedCurrent === timezone) {
      return;
    }

    document.cookie = [
      `${TIMEZONE_COOKIE}=${encodeURIComponent(timezone)}`,
      'path=/',
      'max-age=31536000',
      'samesite=lax',
    ].join('; ');

    router.refresh();
  }, [router]);

  return null;
}