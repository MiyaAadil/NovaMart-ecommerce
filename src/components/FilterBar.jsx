const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
];

const FilterBar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, sortOption, setSortOption}) => {

  return (
    <div className="flex flex-col gap-2 lg:px-10 px-4 md:px-10">

        {/* Search */}
        <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded-lg outline-none md:w-135"
        />

        {/* Category */}
        <div className="flex flex-wrap gap-2 cursor-pointer">

            {categories.map((category) => (
                <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1 rounded capitalize transition-all cursor-pointer ${
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

        <select className="border p-2 rounded-lg w-60 cursor-pointer"
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
