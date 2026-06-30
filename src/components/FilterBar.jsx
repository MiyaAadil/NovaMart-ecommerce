import React from 'react'

const FilterBar = ({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory}) => {
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

            <button className="px-4 py-2 bg-blue-900 text-white rounded cursor-pointer">
            All
            </button>

            <button className="px-4 py-2 bg-gray-200 rounded cursor-pointer">
            Electronics
            </button>

            <button className="px-4 py-2 bg-gray-200 rounded cursor-pointer">
            Jewelery
            </button>

            <button className="px-4 py-2 bg-gray-200 rounded cursor-pointer">
            Men's Clothing
            </button>

            <button className="px-4 py-2 bg-gray-200 rounded cursor-pointer">
            Women's Clothing
            </button>

        </div>

        {/* Sort */}

        <select className="border p-3 rounded-lg w-60 cursor-pointer">

            <option>Default</option>

            <option>Price: Low to High</option>

            <option>Price: High to Low</option>

            <option>Name: A-Z</option>

            <option>Name: Z-A</option>

        </select>

    </div>
  )
}

export default FilterBar
