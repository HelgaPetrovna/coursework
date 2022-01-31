import {HeaderComponent} from "../components/header.components";
import {NavigationComponent} from "../components/navigation.components";
import {CreateComponent} from "../components/create.components";
import {FavoritesComponents} from "../components/favorites.components";
import {ThoughtsComponents} from "../components/thoughts.components";


const header = new HeaderComponent("header");
const navigation = new NavigationComponent("navigation_tabs");
const create = new CreateComponent("createNew");
const favorites = new FavoritesComponents("favorites");
const thought = new ThoughtsComponents("myThoughts");

navigation.registerTabs([
    {name: 'createNew', component: create},
    {name: 'myThoughts', component: thought},
    {name: 'favorites', component: favorites},
])