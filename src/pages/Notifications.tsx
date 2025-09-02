import { NotificationItem } from '../components/notification/NotificationItem';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';

const notifications = [
	{
		initial: 'A',
		color: 'bg-primary/10 text-primary',
		title: 'Ada tugas baru di proyek A',
		time: '2 menit lalu',
		unread: true,
	},
	{
		initial: 'P',
		color: 'bg-success/10 text-success',
		title: 'Profil Anda telah diperbarui',
		time: '10 menit lalu',
		unread: false,
	},
	{
		initial: 'I',
		color: 'bg-warning/10 text-warning',
		title: 'Invoice #123 telah dibayar',
		time: '1 jam lalu',
		unread: true,
	},
];

export default function NotificationsPage() {
	return (
		<div className="w-full mx-auto px-4">
			<Card>
				<CardHeader>
					<CardTitle className="text-2xl font-bold">Notifikasi</CardTitle>
				</CardHeader>
				<CardContent className="pt-0">
					<div className="space-y-1">
						{notifications.map((notif, idx) => (
							<NotificationItem key={idx} {...notif} />
						))}
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
