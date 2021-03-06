import { ApiContext } from '../../types';
import { deserializeContents } from '../serializers/content'
import axios from 'axios'

export default async function getContent({ config }: ApiContext): Promise<any[]> {
  const url = config.backendUrl.concat(`/api/v2/storefront/cms_pages`);
  const resp = await axios.get(url, {
    params: {
      include: 'cms_sections.linked_resource'
    }
  })
  return deserializeContents(resp.data, config)
}
