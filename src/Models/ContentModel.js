export default class ContentModel {
  constructor(entity) {
    Object.assign(this, {
      name: 'Brand',
      title: 'Title',
      description: 'Short description',
      descriptionFull: 'Full description',
      currency: 'currency',
      price: 500
    }, entity);
  }
}