export const filterProducts = (products, filters) => {
  return products.filter((product) => {
    const matchesColor = filters.color ? product.color.toLowerCase() === filters.color.toLowerCase() : true;
    const matchesCompany = filters.company ? product.type.toLowerCase() === filters.company.toLowerCase() : true;
    const matchesSeries = filters.series ? product.series.toLowerCase() === filters.series.toLowerCase() : true;
    const matchesPrice = filters.price
      ? parseFloat(product.price) >= filters.price.min && parseFloat(product.price) <= filters.price.max
      : true;

    // CPU, GPU, and RAM
    const matchesCpu = filters.cpu ? product.cpu.toLowerCase().includes(filters.cpu.toLowerCase()) : true;
    const matchesGpu = filters.gpu ? product.gpu.toLowerCase().includes(filters.gpu.toLowerCase()) : true;
    const matchesRam = filters.ram ? product.ram.toLowerCase().includes(filters.ram.toLowerCase()) : true;

    return matchesColor && matchesCompany && matchesSeries && matchesPrice && matchesCpu && matchesGpu && matchesRam;
  });
};
