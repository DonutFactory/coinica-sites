import { lazy } from "react";
const HomeScreen = lazy(() => import("./HomeScreen"));
const StakingPools = lazy(() => import("./StakingPools"));
const Rewards = lazy(() => import("./Rewards"));
const Vesting = lazy(() => import("./Vesting"));

const routes = [
  {
    key: "HomeScreen",
    exact: true,
    path: "/",
    component: HomeScreen,
    isPrivate: false,
  },
  {
    key: "StakingPools",
    exact: true,
    path: "/pools",
    component: StakingPools,
    isPrivate: false,
  },
  {
    key: "Rewards",
    exact: true,
    path: "/rewards",
    component: Rewards,
    isPrivate: false,
  },
  {
    key: "Vesting",
    exact: true,
    path: "/vesting",
    component: Vesting,
    isPrivate: false,
  },
];

export default routes;
