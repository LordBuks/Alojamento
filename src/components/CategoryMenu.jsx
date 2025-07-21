import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const CategoryMenu = ({ selectedCategory, onCategoryChange, categories, title }) => {
  // Categorias padrão para atletas se não forem fornecidas
  const defaultCategories = ['Sub20', 'Sub17', 'Sub16', 'Sub15', 'Sub14'];
  const menuCategories = categories || defaultCategories;
  const menuTitle = title || 'Atletas Alojados';

  const ButtonComponent = ({ category, isSelected }) => (
    <button
      onClick={() => onCategoryChange(category)}
      className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg whitespace-nowrap ${
        isSelected
          ? 'bg-white text-[#E5050F] shadow-md ring-2 ring-white ring-opacity-50'
          : 'bg-transparent text-white border border-white border-opacity-70 hover:bg-white hover:text-[#E5050F] hover:border-opacity-100'
      }`}
    >
      {category}
    </button>
  );

  return (
    <div className="bg-gradient-to-r from-[#E5050F] to-[#C20C18] py-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white text-center mb-4 tracking-wide">
          {menuTitle}
        </h2>
        
        {/* Layout para desktop (md e acima) */}
        <div className="hidden md:flex flex-wrap justify-center gap-3">
          {menuCategories.map((category) => (
            <ButtonComponent 
              key={category} 
              category={category} 
              isSelected={selectedCategory === category}
            />
          ))}
        </div>

        {/* Layout carrossel para mobile (abaixo de md) */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "center",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {menuCategories.map((category) => (
                <CarouselItem key={category} className="pl-2 md:pl-4 basis-auto">
                  <ButtonComponent 
                    category={category} 
                    isSelected={selectedCategory === category}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default CategoryMenu;

