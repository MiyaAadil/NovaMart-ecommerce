const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
];

const FilterBar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, sortOption, setSortOption}) => {

  return (
    <div className="flex flex-col gap-4 mt-4 mx-5">

        {/* Search */}
        <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-3 rounded-lg outline-none"
        />

        {/* Category */}
        <div className="flex flex-wrap gap-2 cursor-pointer">

            {categories.map((category) => (
                <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded capitalize transition-all cursor-pointer ${
                    selectedCategory === category
                    ? "bg-blue-900 text-white"
                    : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
                >
                {category}
                </button>
            ))}
        </div>

        {/* Sort */}

        <select className="border p-3 rounded-lg w-60 cursor-pointer"
        value={sortOption} onChange={(e) => setSortOption(e.target.value)}>

            <option value="default">Default</option>

            <option value="low-high">Price: Low to High</option>

            <option value="high-low">Price: High to Low</option>

            <option value="a-z">Name: A-Z</option>

            <option value="z-a">Name: Z-A</option>

        </select>

    </div>
  )
}

export default FilterBar;
