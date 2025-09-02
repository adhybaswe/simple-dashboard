interface NotificationItemProps {
  initial: string;
  color: string;
  title: string;
  time: string;
  unread?: boolean;
}

export function NotificationItem({ initial, color, title, time, unread }: NotificationItemProps) {
  return (
    <div className="flex items-center bg-white border-b p-4 relative">
      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 ${color}`}>
        {initial}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-medium text-base flex items-center gap-2">
          <span className="truncate">{title}</span>
        </div>
        <div className="text-xs text-muted-foreground">{time}</div>
      </div>
      {unread && (
        <span className="ml-4 inline-block w-2 h-2 rounded-full bg-primary animate-pulse self-center" title="Belum dibaca"></span>
      )}
    </div>
  );
}
