"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Bell,
  CalendarPlus,
  CheckCheck,
  Circle,
  Settings,
  Star,
  UserRoundPen,
  UsersRound,
  WalletCards,
} from "lucide-react";

type NotificationIcon = typeof CalendarPlus;

type Notification = {
  id: number;
  title: string;
  detail: string;
  time: string;
  icon: NotificationIcon;
  unread: boolean;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "New appointment booked for tomorrow at 2:00PM",
    detail: "5 min ago",
    time: "5 min ago",
    icon: CalendarPlus,
    unread: true,
  },
  {
    id: 2,
    title: "New appointment booked for tomorrow at 2:00PM",
    detail: "5 min ago",
    time: "5 min ago",
    icon: CalendarPlus,
    unread: true,
  },
  {
    id: 3,
    title: "Ajayi edited his portfolio",
    detail: "10 min ago",
    time: "10 min ago",
    icon: UserRoundPen,
    unread: false,
  },
  {
    id: 4,
    title: "New appointment booked for tomorrow at 2:00PM",
    detail: "5 min ago",
    time: "5 min ago",
    icon: UsersRound,
    unread: true,
  },
  {
    id: 5,
    title: "New appointment booked for tomorrow at 2:00PM",
    detail: "5 min ago",
    time: "5 min ago",
    icon: CalendarPlus,
    unread: true,
  },
  {
    id: 6,
    title: "New appointment booked for tomorrow at 2:00PM",
    detail: "5 min ago",
    time: "5 min ago",
    icon: UsersRound,
    unread: true,
  },
  {
    id: 7,
    title: "You just received payment from Uche Ben",
    detail: "5 min ago",
    time: "5 min ago",
    icon: WalletCards,
    unread: true,
  },
  {
    id: 8,
    title: "New appointment booked for tomorrow at 2:00PM",
    detail: "5 min ago",
    time: "5 min ago",
    icon: CalendarPlus,
    unread: true,
  },
  {
    id: 9,
    title: "New appointment booked for tomorrow at 2:00PM",
    detail: "5 min ago",
    time: "5 min ago",
    icon: Star,
    unread: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [doNotDisturb, setDoNotDisturb] = useState(false);

  const unreadCount = notifications.filter(
    (notification) => notification.unread,
  ).length;

  function markAllAsRead() {
    setNotifications((current) =>
      current.map((notification) => ({ ...notification, unread: false })),
    );
  }

  function markAsRead(id: number) {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification,
      ),
    );
  }

  return (
    <main className="min-h-svh bg-[#070c14] text-white">
      <div className="mx-auto min-h-svh w-full max-w-5xl px-4 pb-12 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pt-10">
        <header className="flex items-center justify-between gap-4 border-b border-white/10 pb-5 sm:pb-7">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Link
              href="/overview"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/65 transition hover:bg-white/10 hover:text-white"
              aria-label="Back to overview"
            >
              <ArrowLeft size={18} />
            </Link>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#3297f3]/15 text-[#3297f3]">
                <Bell size={17} />
              </span>
              <div>
                <h1 className="text-base font-semibold tracking-tight sm:text-xl">
                  Notifications
                </h1>
                <p className="mt-0.5 text-[.6rem] text-white/45 sm:text-xs">
                  {unreadCount} unread{" "}
                  {unreadCount === 1 ? "message" : "messages"}
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/55 transition hover:bg-white/10 hover:text-white"
            aria-label="Notification settings"
          >
            <Settings size={17} />
          </button>
        </header>

        <div className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:py-7">
          <button
            type="button"
            className="flex w-fit items-center gap-2 text-[.65rem] text-white/55 transition hover:text-white sm:text-xs"
            onClick={markAllAsRead}
            disabled={unreadCount === 0}
          >
            <CheckCheck size={15} />
            <span>
              {unreadCount === 0 ? "All messages read" : "Mark all as read"}
            </span>
          </button>
          <label className="flex w-fit cursor-pointer items-center gap-2.5 text-[.65rem] text-white/65 sm:text-xs">
            <span>Do not disturb</span>
            <input
              type="checkbox"
              checked={doNotDisturb}
              onChange={(event) => setDoNotDisturb(event.target.checked)}
              className="peer sr-only"
            />
            <span className="relative h-5 w-9 rounded-full bg-white/20 transition peer-checked:bg-[#3297f3] after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-4" />
          </label>
        </div>

        <section
          aria-label="Notification list"
          className="grid gap-2.5 sm:gap-3 lg:grid-cols-2"
        >
          {notifications.map((notification, index) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              index={index}
              onRead={markAsRead}
            />
          ))}
        </section>
      </div>
    </main>
  );
}

function NotificationItem({
  notification,
  index,
  onRead,
}: {
  notification: Notification;
  index: number;
  onRead: (id: number) => void;
}) {
  const Icon = notification.icon;

  return (
    <button
      type="button"
      className={`dashboard-enter flex min-h-[68px] w-full items-center gap-3 rounded-xl px-3.5 py-3 text-left transition hover:-translate-y-0.5 hover:bg-[#172238] sm:min-h-[76px] sm:px-4 ${notification.unread ? "bg-[#111b2c]" : "bg-[#0d1625] opacity-80"}`}
      style={{ animationDelay: `${index * 45}ms` }}
      onClick={() => onRead(notification.id)}
      aria-label={`${notification.unread ? "Mark as read: " : "Read: "}${notification.title}`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${notification.unread ? "bg-[#0b72f0]/10 text-[#1685ff]" : "bg-white/5 text-[#1685ff]/80"}`}
      >
        <Icon size={16} strokeWidth={1.7} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[.62rem] font-medium leading-snug text-white sm:text-xs">
          {notification.title}
        </span>
        <span className="mt-1 block text-[.55rem] text-white/40 sm:text-[.65rem]">
          {notification.detail}
        </span>
      </span>
      {notification.unread && (
        <Circle
          size={7}
          fill="currentColor"
          className="shrink-0 text-[#1685ff]"
        />
      )}
    </button>
  );
}
