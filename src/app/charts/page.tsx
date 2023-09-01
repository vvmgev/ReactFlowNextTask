import ColumnChart from '@/components/charts/column/column';
import HeatMap from '@/components/charts/heatmap/heatmap';
import LineChart from '@/components/charts/line/line';

const Todo: React.FC = (): React.ReactElement => {
  return (
    <div>
      <div className='flex flex-row flex-wrap gap-2 justify-center'>
      <div className='max-w-[350px] border border-teal-300 rounded-2xl p-3'>
          <ColumnChart />
      </div>
      <div className='max-w-[350px] border border-teal-300 rounded-2xl p-3'>
        <HeatMap />
      </div>
      <div className='max-w-[350px] border border-teal-300 rounded-2xl p-3'>
          <LineChart />
        </div>
      </div>
    </div>
  )
}
export default Todo;