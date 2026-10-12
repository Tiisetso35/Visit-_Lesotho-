// Pure JavaScript helpers for the attractions list (no React in this file).

// Build the category dropdown options: "All" plus each unique category.
export function getCategories(attractions) {
  return ["All", ...new Set(attractions.map((a) => a.category))];
}

// Keep only attractions that match the search text AND the chosen category.
export function filterAttractions(attractions, search, category) {
  const text = search.trim().toLowerCase();

  return attractions.filter((a) => {
    const matchesName = a.name.toLowerCase().includes(text);
    const matchesCategory = category === "All" || a.category === category;
    return matchesName && matchesCategory;
  });
}
