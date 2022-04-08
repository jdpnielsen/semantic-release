export default function Debug() {
  return (
    <div>
      <p>Debug page</p>
      <pre>{JSON.stringify({ debug: true }, null, 2)}</pre>
      <p>Testing release type:</p>
      <ul>
        <li>feat - ✅</li>
        <li>fix - ✅</li>
        <li>ci - ❌</li>
        <li>refactor - ✅</li>
      </ul>
    </div>
  )
}
