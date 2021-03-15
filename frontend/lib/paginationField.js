import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false,
    read(existingItems = [], { args, cache }) {
      const { skip, first } = args;
      // read the number of items on the page from cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // check if we have existing items
      const items = existingItems.slice(skip, skip + first).filter((x) => x);
      // if there are items AND there aren't enough items to fill the number we requested ANd we are on the last page
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      // if we don't have any items, go to network and fetch them
      if (items.length !== first) {
        return false;
      }
      // if we do, just return from cache
      if (items.length) {
        return items;
      }
      // fallback to network if above conditions fail
      return false;
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args;
      const merged = existing ? existing.slice(0) : [];
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      return merged;
    },
  };
}
