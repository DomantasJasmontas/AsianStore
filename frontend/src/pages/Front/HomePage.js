import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import ProductDisplay from '../../components/ProductDisplay/ProductDisplay.js';
import { getAll, getAllByTag, getAllTags, search} from '../../services/productService.js';
import Tags from '../../components/Tags/Tags';


const initialState = { products: [], tags: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'Products_LOADED':
      return { ...state, products: action.payload };
      case 'TAGS_LOADED':
        return { ...state, tags: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { products,tags } = state;
  const { searchTerm, tag } = useParams();

  useEffect(() => {
    getAllTags().then(tags => dispatch({ type: 'TAGS_LOADED', payload: tags }));

    const loadProducts = tag
      ? getAllByTag(tag)
      : searchTerm
      ? search(searchTerm)
      : getAll();

    loadProducts.then(products => dispatch({ type: 'Products_LOADED', payload: products }));
  }, [searchTerm,tag]);

  return (
    <>
      <Search/>
      <Tags tags={tags} />
      <ProductDisplay products={products} />
    </>
  );
}