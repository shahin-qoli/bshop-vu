/* eslint-disable camelcase */

import { ApiContext } from '../../types';
import { addHostToProductImages, deserializeLimitedVariants, deserializeSearchMetadata } from '../serializers/product';

export default async function getProducts({ client, config }: ApiContext, params) {
  const { id, categoryId, page, sort, optionValuesIds, price, itemsPerPage, term } = params;

  const result = await client.products.list({
    filter: {
      ids: id,
      taxons: categoryId,
      option_value_ids: optionValuesIds,
      price,
      name: term
    },
    include: 'variants.option_values,option_types,product_properties,taxons,images',
    page,
    sort,
    per_page: itemsPerPage
  });

  if (result.isSuccess()) {
    try {
      const data = result.success();
      const productsData = addHostToProductImages(data, config);
      return {
        data: deserializeLimitedVariants(productsData),
        meta: deserializeSearchMetadata(data.meta)
      };
    } catch (e) {
      console.log(e);
    }
  } else {
    console.log(result.fail());
    throw result.fail();
  }
}
