import {
  Home,
  Compass,
  Bell,
  Bookmark,
  User,
  Settings,
} from "lucide-react";

export const navigation = [
  {
    id: 1,
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    id: 2,
    label: "Explore",
    href: "/explore",
    icon: Compass,
  },
  {
    id: 3,
    label: "Notifications",
    href: "/notifications",
    icon: Bell,
  },
  {
    id: 4,
    label: "Bookmarks",
    href: "/bookmarks",
    icon: Bookmark,
  },
  {
    id: 5,
    label: "Profile",
    href: "/profile",
    icon: User,
  },
  {
    id: 6,
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];