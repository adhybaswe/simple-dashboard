import { ChartAreaStacked } from '@/components/dashboard/area-chart';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { DollarSign, Users, BarChart2, Zap } from 'lucide-react';
import { ChartLineMultiple } from '@/components/dashboard/line-chart';

export default function Dashboard() {
  return (
    <div className='flex flex-1 flex-col gap-6 p-6 pt-4'>
      {/* Welcome Section */}
      <div className='space-y-2'>
        <h1 className='text-3xl font-bold text-foreground'>Welcome back! 👋</h1>
        <p className='text-muted-foreground'>
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        <Card className='hover-lift'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium text-primary'>
              Total Revenue
            </CardTitle>
            <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20'>
              <DollarSign className='w-6 h-6 text-primary' />
            </div>
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold animated-gradient bg-clip-text text-transparent mb-1'>
              $45,231.89
            </div>
            <p className='text-xs text-muted-foreground'>
              <span className='text-emerald-600 font-semibold'>+20.1%</span>{' '}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className='hover-lift'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium text-primary'>
              Active Users
            </CardTitle>
            <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20'>
              <Users className='w-6 h-6 text-primary' />
            </div>
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold text-primary mb-1'>2,350</div>
            <p className='text-xs text-muted-foreground'>
              <span className='text-emerald-600 font-semibold'>+180.1%</span>{' '}
              from last month
            </p>
          </CardContent>
        </Card>

        <Card className='hover-lift'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium text-primary'>
              Projects
            </CardTitle>
            <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20'>
              <BarChart2 className='w-6 h-6 text-primary' />
            </div>
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold text-primary mb-1'>12</div>
            <p className='text-xs text-muted-foreground'>
              <span className='text-emerald-600 font-semibold'>+19%</span> from
              last month
            </p>
          </CardContent>
        </Card>

        <Card className='hover-lift'>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium text-primary'>
              Performance
            </CardTitle>
            <div className='h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20'>
              <Zap className='w-6 h-6 text-primary' />
            </div>
          </CardHeader>
          <CardContent>
            <div className='text-3xl font-bold text-primary mb-1'>98.2%</div>
            <p className='text-xs text-muted-foreground'>
              <span className='text-emerald-600 font-semibold'>+2.1%</span> from
              last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        <div className=''>
          <ChartAreaStacked />
        </div>
        <div className=''>
          <ChartLineMultiple />
        </div>
      </div>
    </div>
  );
}
