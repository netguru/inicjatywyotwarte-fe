import lunr from 'lunr'
import { forEach } from 'lodash'

export const lunrIndex = (data) => lunr(function() {
  this.pipeline.remove(lunr.trimmer)

  this.field('id')
  this.field('name')
  this.field('location')
  this.field('description')
  this.field('tags')

  forEach(data[0], item => this.add({
    id: item.id,
    name: item.attributes.name,
    location: item.attributes.location,
    description: item.attributes.description,
    tags: item.attributes.tags,
  }))
})
