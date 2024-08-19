import { RouteObject } from "react-router-dom";

import { BLOG } from "@/constants/routes";

// TODO:Remove after real implementation
// eslint-disable-next-line react-refresh/only-export-components
const WIPComponent = ({ pageTitle }: { pageTitle: string }) => {
  return (
    <div className="m-auto my-16 flex h-[31.25rem] w-1/2 flex-col items-center justify-center rounded-md bg-primary-50 p-10">
      <p className="mb-3 text-4xl">{pageTitle}</p>
      <span className="text-lg">Work In Progress</span>
    </div>
  );
};

const blogRoutes: RouteObject[] = [
  {
    path: BLOG.INDEX,
    element: <WIPComponent pageTitle="All Blogs" />,
  },
  {
    path: BLOG.CREATE,
    element: <WIPComponent pageTitle="Create Blog" />,
  },
  {
    path: BLOG.EDIT,
    element: <WIPComponent pageTitle="Edit Blog" />,
  },
  {
    path: BLOG.SHOW,
    element: <WIPComponent pageTitle="View Blog" />,
  },
];

export default blogRoutes;
