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
        <Route path="story" element={<Story />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="collection" element={<Collection />} />
        <Route path="events" element={<Events />} />
        <Route path="managecollection" element={<ManageCollection />} />
        <Route path="managevents" element={<ManageEvents />} />
        <Route path="manageusers" element={<ManageUsers />} />
        <Route path="support" element={<Support />} />
        <Route path="memorial" element={<Memorial />} />
      </Route>
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
