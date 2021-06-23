import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    COMPOSITION_ROUTE,
    COUNTRY_ROUTE,
    GENRE_ROUTE,
    HUMAN_ROUTE,
    LIST_COMPOSITION_HUMAN_ROUTE,
    LIST_COUNTRY_ROUTE,
    LIST_GENRE_ROUTE,
    LIST_PROFESSION_HUMAN_ROUTE,
    LOGIN_ROUTE,
    PROFESSION_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    TYPE_ROUTE, USER_PROFILE_ROUTE
} from "./utils/consts";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import CompositionPage from "./pages/CompositionPage";
import GenrePage from "./pages/GenrePage";
import TypePage from "./pages/TypePage";
import ProfessionPage from "./pages/ProfessionPage";
import CountryPage from "./pages/CountryPage";
import HumanPage from "./pages/HumanPage";
import List_profession_humanPage from "./pages/List_profession_humanPage";
import List_countryPage from "./pages/List_countryPage";
import List_genrePage from "./pages/List_genrePage";
import List_composition_humanPage from "./pages/List_composition_humanPage";
import CompositionPageAdmin from "./pages/CompositionPageAdmin";
import UserPage from "./pages/UserPage";

export const authRoutes = [
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
    {
        path:GENRE_ROUTE,
        Component: GenrePage
    },
    {
        path:TYPE_ROUTE,
        Component: TypePage
    },
    {
        path:PROFESSION_ROUTE,
        Component: ProfessionPage
    },
    {
        path:COUNTRY_ROUTE,
        Component: CountryPage
    },
    {
        path:HUMAN_ROUTE,
        Component: HumanPage
    },
    {
        path:LIST_PROFESSION_HUMAN_ROUTE,
        Component: List_profession_humanPage
    },
    {
        path:LIST_COUNTRY_ROUTE,
        Component: List_countryPage
    },
    {
        path:LIST_GENRE_ROUTE,
        Component: List_genrePage
    },
    {
        path:LIST_COMPOSITION_HUMAN_ROUTE,
        Component: List_composition_humanPage
    },
    {
        path:COMPOSITION_ROUTE,
        Component: CompositionPageAdmin
    },
    {
        path:COMPOSITION_ROUTE + '/:id',
        Component: CompositionPage
    },
    {
        path:LOGIN_ROUTE,
        Component: Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path:SHOP_ROUTE,
        Component: Shop
    },
    {
        path:USER_PROFILE_ROUTE,
        Component: UserPage
    }
]
export const publicRoutes = [
    // {
    //     path:COMPOSITION_ROUTE + '/:id',
    //     Component: CompositionPage
    // },
    // {
    //     path:LOGIN_ROUTE,
    //     Component: Auth
    // },
    // {
    //     path:REGISTRATION_ROUTE,
    //     Component: Auth
    // },
    // {
    //     path:SHOP_ROUTE,
    //     Component: Shop
    // }
    {
        path:ADMIN_ROUTE,
        Component: Admin
    },
    {
        path:GENRE_ROUTE,
        Component: GenrePage
    },
    {
        path:TYPE_ROUTE,
        Component: TypePage
    },
    {
        path:PROFESSION_ROUTE,
        Component: ProfessionPage
    },
    {
        path:COUNTRY_ROUTE,
        Component: CountryPage
    },
    {
        path:HUMAN_ROUTE,
        Component: HumanPage
    },
    {
        path:LIST_PROFESSION_HUMAN_ROUTE,
        Component: List_profession_humanPage
    },
    {
        path:LIST_COUNTRY_ROUTE,
        Component: List_countryPage
    },
    {
        path:LIST_GENRE_ROUTE,
        Component: List_genrePage
    },
    {
        path:LIST_COMPOSITION_HUMAN_ROUTE,
        Component: List_composition_humanPage
    },
    {
        path:COMPOSITION_ROUTE,
        Component: CompositionPageAdmin
    },
    {
        path:COMPOSITION_ROUTE + '/:id',
        Component: CompositionPage
    },
    {
        path:LOGIN_ROUTE,
        Component: Auth
    },
    {
        path:REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path:SHOP_ROUTE,
        Component: Shop
    },
    {
        path:USER_PROFILE_ROUTE,
        Component: UserPage
    }
]
