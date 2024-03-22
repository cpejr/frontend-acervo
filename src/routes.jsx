import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import {
  Home,
  Collection,
  Support,
  Events,
  ManageCollection,
  ManageEvents,
  ManageUsers,
  Story,
  AboutUs,
  Memorial,
} from "./pages";
import { AppLayout } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="historia" element={<Story />} />
        <Route path="sobre" element={<AboutUs />} />
        <Route path="memorial" element={<Memorial />} />
        <Route path="eventos" element={<Events />} />
        <Route path="gerenciar-memorial" element={<ManageCollection />} />
        <Route path="gerenciar-eventos" element={<ManageEvents />} />
        <Route path="gerenciar-usuarios" element={<ManageUsers />} />
        <Route path="suporte" element={<Support />} />
      </Route>
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
