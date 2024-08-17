import { Outlet } from "react-router-dom";

import Layout from "@/layouts/Layout";

const AppRoot = () => (
  <Layout>
    <Outlet />
  </Layout>
);

export default AppRoot;
