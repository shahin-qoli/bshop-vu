import {
  Context,
  useContentFactory,
  UseContentFactoryParams
} from '@vue-storefront/core';
interface ContentSearchParams {
  name: string
}

const params: UseContentFactoryParams<any, any> = {
  search (context: Context, params: ContentSearchParams) {
    return context.$spree.api.getContent()
  }

}
export default useContentFactory<any, any>(params);
