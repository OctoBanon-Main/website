'use client';

import { calculateAge } from '@/utils/getAge';
import Link from "next/link";

export default function AboutMe() {
  const age = calculateAge('2006-07-07');
  return (
    <section>
      <h2 className="font-bold text-sm">About me</h2>
      <p className="text-neutral-300 text-sm">
        Hi! I&apos;m Maksim - a {age}-year-old developer and system administrator from{" "}
        <Link href="/yaycha.gif">Russia</Link>. Currently focusing on Rust (already comfortable with the basics) and Kotlin (actively learning).
      </p>
    </section>
  );
}