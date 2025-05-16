// components/Breadcrumbs.tsx
export default function BreadCrumbs() {
  return (
    <nav className="flex font-medium text-xs text-gray-500 mb-6">
      <a href="/" className="hover:text-gray-900">Home</a>
      <span className="mx-2">&gt;</span>
      <a href="/groceries" className="hover:text-gray-900">Groceries</a>
      <span className="mx-2">&gt;</span>
      <a href="/groceries/vegetables" className="hover:text-gray-900">Vegetables</a>
      <span className="mx-2">&gt;</span>
      <span className="text-gray-900">Broccoli Per Piece</span>
    </nav>
  )
}
