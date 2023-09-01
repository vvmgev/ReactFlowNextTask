export const data = [
    {
      type: 'One',
      sales: 38,
    },
    {
      type: 'Two',
      sales: 52,
    },
    {
      type: 'Three',
      sales: 61,
    },
    {
      type: 'Four',
      sales: 145,
    },
    {
      type: 'Five',
      sales: 48,
    },
    {
      type: 'Six',
      sales: 38,
    },
    {
      type: 'Seven',
      sales: 38,
    },
    {
      type: 'Eight',
      sales: 38,
    },
];

export const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: '类别',
      },
      sales: {
        alias: '销售额',
      },
    },
  }