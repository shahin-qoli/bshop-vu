const findItems = (menu, apiMenus) => {
  if (menu.attributes.is_leaf) return [];

  const menuIds = menu.relationships.children.data.map(child => child.id);
  const items = apiMenus.filter(menu => menuIds.includes(menu.id));

  return items.map(item => {
    let link = item.attributes.link
    if (link !== null) {
      link = link.replace('/t/', '/c/')
    }
    return {   
      id: item.id,
      name: item.attributes.name,
      link: link,
      items: findItems(item, apiMenus)
    }
  })
};

export const deserializeMenu = (apiMenus) => {
  return apiMenus.map(menu => {
    let link = menu.attributes.link
    if (link !== null) {
      link = link.replace('/t/', '/c/')
    }
    return {
      id: menu.id,
      name: menu.attributes.name,
      link: link,
      items: findItems(menu, apiMenus)
    }
  })
};
