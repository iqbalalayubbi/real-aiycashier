import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Cashier from '@/views/Cashier.vue'
import Slider from '@/views/Slider.vue'
import Profile from '@/views/Profile.vue'
import Users from '@/views/Users.vue'
import Items from '@/views/Items.vue'
import Chart from '@/views/Chart.vue'
import Shop from '@/views/Shop.vue'
import EditProfile from '@/views/EditProfile.vue'
import AddItem from '@/views/AddItem.vue'
import AddUser from '@/views/AddUser.vue'
import EditItem from '@/views/EditItem.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/cashier",
    name: "cashier",
    component: Cashier,
  },
  {
    path: "/slider",
    name: "slider",
    component: Slider,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
  {
    path: "/items",
    name: "items",
    component: Items,
  },
  {
    path: "/chart",
    name: "chart",
    component: Chart,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/edit/profile",
    name: "edit",
    component: EditProfile,
  },
  {
    path: "/items/add",
    name: "addItem",
    component: AddItem,
  },
  {
    path: "/users/add",
    name: "addUser",
    component: AddUser,
  },
  {
    path: "/item/edit",
    name: "editItem",
    component: EditItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
