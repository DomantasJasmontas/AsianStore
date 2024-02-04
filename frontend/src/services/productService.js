import { sample_products, sample_tags} from "../data";

export const getAll = async () => sample_products;

export const search = async searchTerm =>
  sample_products.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  export const getAllTags = async () => sample_tags;

export const getAllByTag = async tag => {
  if (tag === 'All') return getAll();
  return sample_products.filter(item => item.tags?.includes(tag));
};

export const getById = async productId =>
  sample_products.find(item => item.id === productId);