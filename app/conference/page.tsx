import Link from "next/link";

export default function ConferencePage () {
  return <>
    <h1>Welcome to Conference Page</h1>
    <h2>
      <Link href="/conference/speakers">Speakers</Link>
    </h2>
    <h2>
      <Link href="/conference/sessions">Speakers</Link>
    </h2>
  </>
}
