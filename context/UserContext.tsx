"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type UserContextType = {
  displayName: string;
  username: string;
  email: string;

  darkMode: boolean;
  compactLayout: boolean;

  pushNotifications: boolean;
  emailNotifications: boolean;

  privateAccount: boolean;
  activityStatus: boolean;

  updateDisplayName: (
    value: string
  ) => void;

  updateUsername: (
    value: string
  ) => void;

  toggleDarkMode: () => void;

  toggleCompactLayout: () => void;

  togglePushNotifications: () => void;

  toggleEmailNotifications: () => void;

  togglePrivateAccount: () => void;

  toggleActivityStatus: () => void;
};

const UserContext =
  createContext<UserContextType | null>(
    null
  );

export function UserProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [displayName, setDisplayName] =
    useState("Ayush Kumar");

  const [username, setUsername] =
    useState("@ayushkumar");

  const [email] = useState(
    "ayush@example.com"
  );

  const [darkMode, setDarkMode] =
    useState(true);

  const [compactLayout, setCompactLayout] =
    useState(false);

  const [pushNotifications, setPushNotifications] =
    useState(true);

  const [emailNotifications, setEmailNotifications] =
    useState(true);

  const [privateAccount, setPrivateAccount] =
    useState(false);

  const [activityStatus, setActivityStatus] =
    useState(true);

  return (
    <UserContext.Provider
      value={{
        displayName,
        username,
        email,

        darkMode,
        compactLayout,

        pushNotifications,
        emailNotifications,

        privateAccount,
        activityStatus,

        updateDisplayName:
          setDisplayName,

        updateUsername:
          setUsername,

        toggleDarkMode: () =>
          setDarkMode(
            (previous) => !previous
          ),

        toggleCompactLayout: () =>
          setCompactLayout(
            (previous) => !previous
          ),

        togglePushNotifications: () =>
          setPushNotifications(
            (previous) => !previous
          ),

        toggleEmailNotifications: () =>
          setEmailNotifications(
            (previous) => !previous
          ),

        togglePrivateAccount: () =>
          setPrivateAccount(
            (previous) => !previous
          ),

        toggleActivityStatus: () =>
          setActivityStatus(
            (previous) => !previous
          ),
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context =
    useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUser must be used inside UserProvider."
    );
  }

  return context;
}