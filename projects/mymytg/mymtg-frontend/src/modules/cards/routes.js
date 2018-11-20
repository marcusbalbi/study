import Menu from './Menu'
import MainArtist from './artist/components/crud/Main'
import ArtistForm from './artist/components/crud/Form'
import MainBlock from './block/components/crud/Main'
import BlockForm from './block/components/crud/Form'
import MainEdition from './edition/components/crud/Main'
import EditionForm from './edition/components/crud/Form'
import MainCard from './card/components/crud/Main'
import CardForm from './card/components/crud/Form'

let artistRoutes = [
  {
    path: '/cards/artist',
    component: MainArtist,
    name: 'cards.artist'
  },
  {
    path: '/cards/artist/create',
    component: ArtistForm,
    name: 'cards.artist.create'
  },
  {
    path: '/cards/artist/update/:id',
    component: ArtistForm,
    name: 'cards.artist.update'
  }
]

let blockRoutes = [
  {
    path: '/cards/block',
    component: MainBlock,
    name: 'cards.block'
  },
  {
    path: '/cards/block/create',
    component: BlockForm,
    name: 'cards.block.create'
  },
  {
    path: '/cards/block/update/:id',
    component: BlockForm,
    name: 'cards.block.update'
  }
]

let editionRoutes = [
  {
    path: '/cards/edition',
    component: MainEdition,
    name: 'cards.edition'
  },
  {
    path: '/cards/edition/create',
    component: EditionForm,
    name: 'cards.edition.create'
  },
  {
    path: '/cards/edition/update/:id',
    component: EditionForm,
    name: 'cards.edition.update'
  }
]

let cardRoutes = [
  {
    path: '/cards/card',
    component: MainCard,
    name: 'cards.card'
  },
  {
    path: '/cards/card/create',
    component: CardForm,
    name: 'cards.card.create'
  },
  {
    path: '/cards/card/update/:id',
    component: CardForm,
    name: 'cards.card.update'
  }
]

export default [
  {
    path: '/cards',
    component: Menu
  },
  ...artistRoutes,
  ...blockRoutes,
  ...editionRoutes,
  ...cardRoutes
]
