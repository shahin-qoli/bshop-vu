import { Logger } from '@vue-storefront/core';
import { ApiContext, GetProductParams, ProductVariant } from '../../types';
import { addHostToProductImages, deserializeSingleProductVariants } from '../serializers/product';

export default async function getProduct({ client, config }: ApiContext, { slug }: GetProductParams): Promise<ProductVariant[]> {
  const currency = await config.internationalization.getCurrency();

  let include;

  if (config.spreeFeatures.fetchPrimaryVariant) {
    include = 'primary_variant,default_variant,variants.option_values,option_types,product_properties,taxons,taxons.parent,images';
  } else {
    include = 'default_variant,variants.option_values,option_types,product_properties,taxons,taxons.parent,images';
  }

  const result = await client.products.show(
    slug,
    undefined,
    {
      fields: {
        product: 'name,slug,sku,description,primary_variant,compare_at_price,default_variant,variants,option_types,product_properties,taxons',
        variant: 'sku,price,display_price,in_stock,product,compare_at_price,images,option_values,is_master'
      },
      include,
      currency
    }
  );

  if (result.isSuccess()) {
    try {
      const data = result.success();
      const productsData = addHostToProductImages(data, config);
      const deserializedVariants = deserializeSingleProductVariants(productsData);
      return deserializedVariants;
    } catch (e) {
      Logger.error(e);
    }
  } else {
    Logger.error(result.fail());
    throw result.fail();
  }
}

